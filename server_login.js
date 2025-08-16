// server.js
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: "your-secret-key-change-this",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // set to true in production with HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Mock database (ในการใช้จริงควรใช้ database จริง)
const users = [];

// Helper function to find user
const findUser = (criteria) => {
  return users.find((user) => {
    if (criteria.email) return user.email === criteria.email;
    if (criteria.id) return user.id === criteria.id;
    if (criteria.googleId) return user.googleId === criteria.googleId;
    if (criteria.githubId) return user.githubId === criteria.githubId;
    return false;
  });
};

// Passport serialization
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = findUser({ id });
  done(null, user);
});

// Local Strategy (Email/Password)
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = findUser({ email });
        if (!user) {
          return done(null, false, { message: "Invalid email or password" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          return done(null, false, { message: "Invalid email or password" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "your-google-client-id",
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET || "your-google-client-secret",
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = findUser({ googleId: profile.id });

        if (user) {
          return done(null, user);
        }

        // Check if user exists with same email
        user = findUser({ email: profile.emails[0].value });
        if (user) {
          // Link Google account to existing user
          user.googleId = profile.id;
          return done(null, user);
        }

        // Create new user
        const newUser = {
          id: Date.now().toString(),
          email: profile.emails[0].value,
          name: profile.displayName,
          googleId: profile.id,
          avatar: profile.photos[0].value,
        };
        users.push(newUser);
        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || "your-github-client-id",
      clientSecret:
        process.env.GITHUB_CLIENT_SECRET || "your-github-client-secret",
      callbackURL: "/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = findUser({ githubId: profile.id });

        if (user) {
          return done(null, user);
        }

        // Check if user exists with same email
        const email = profile.emails
          ? profile.emails[0].value
          : `${profile.username}@github.local`;
        user = findUser({ email });
        if (user) {
          // Link GitHub account to existing user
          user.githubId = profile.id;
          return done(null, user);
        }

        // Create new user
        const newUser = {
          id: Date.now().toString(),
          email,
          name: profile.displayName || profile.username,
          githubId: profile.id,
          username: profile.username,
          avatar: profile.photos[0].value,
        };
        users.push(newUser);
        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: "Not authenticated" });
};

// Routes
// Register
app.post("/auth/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = findUser({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      name,
    };
    users.push(newUser);

    req.login(newUser, (err) => {
      if (err) return res.status(500).json({ error: "Login failed" });
      res.json({
        user: { id: newUser.id, email: newUser.email, name: newUser.name },
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Local login
app.post("/auth/login", passport.authenticate("local"), (req, res) => {
  res.json({
    user: {
      id: req.user.id,
      email: req.user.email,
      name: req.user.name,
    },
  });
});

// Google OAuth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);

// GitHub OAuth routes
app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);

// Logout
app.post("/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.json({ message: "Logged out successfully" });
  });
});

// Get current user
app.get("/auth/user", isAuthenticated, (req, res) => {
  res.json({
    user: {
      id: req.user.id,
      email: req.user.email,
      name: req.user.name,
      avatar: req.user.avatar,
      username: req.user.username,
    },
  });
});

// Protected route example
app.get("/api/protected", isAuthenticated, (req, res) => {
  res.json({
    message: "This is protected data",
    user: req.user.name,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
