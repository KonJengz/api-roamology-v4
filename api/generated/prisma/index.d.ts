
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AboutMe
 * 
 */
export type AboutMe = $Result.DefaultSelection<Prisma.$AboutMePayload>
/**
 * Model TopicAboutMe
 * 
 */
export type TopicAboutMe = $Result.DefaultSelection<Prisma.$TopicAboutMePayload>
/**
 * Model ImgTopicAboutMe
 * 
 */
export type ImgTopicAboutMe = $Result.DefaultSelection<Prisma.$ImgTopicAboutMePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model ImgPost
 * 
 */
export type ImgPost = $Result.DefaultSelection<Prisma.$ImgPostPayload>
/**
 * Model TopicPost
 * 
 */
export type TopicPost = $Result.DefaultSelection<Prisma.$TopicPostPayload>
/**
 * Model ImgTopicPost
 * 
 */
export type ImgTopicPost = $Result.DefaultSelection<Prisma.$ImgTopicPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutMe`: Exposes CRUD operations for the **AboutMe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutMes
    * const aboutMes = await prisma.aboutMe.findMany()
    * ```
    */
  get aboutMe(): Prisma.AboutMeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topicAboutMe`: Exposes CRUD operations for the **TopicAboutMe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopicAboutMes
    * const topicAboutMes = await prisma.topicAboutMe.findMany()
    * ```
    */
  get topicAboutMe(): Prisma.TopicAboutMeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imgTopicAboutMe`: Exposes CRUD operations for the **ImgTopicAboutMe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImgTopicAboutMes
    * const imgTopicAboutMes = await prisma.imgTopicAboutMe.findMany()
    * ```
    */
  get imgTopicAboutMe(): Prisma.ImgTopicAboutMeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imgPost`: Exposes CRUD operations for the **ImgPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImgPosts
    * const imgPosts = await prisma.imgPost.findMany()
    * ```
    */
  get imgPost(): Prisma.ImgPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topicPost`: Exposes CRUD operations for the **TopicPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopicPosts
    * const topicPosts = await prisma.topicPost.findMany()
    * ```
    */
  get topicPost(): Prisma.TopicPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imgTopicPost`: Exposes CRUD operations for the **ImgTopicPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImgTopicPosts
    * const imgTopicPosts = await prisma.imgTopicPost.findMany()
    * ```
    */
  get imgTopicPost(): Prisma.ImgTopicPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AboutMe: 'AboutMe',
    TopicAboutMe: 'TopicAboutMe',
    ImgTopicAboutMe: 'ImgTopicAboutMe',
    Post: 'Post',
    ImgPost: 'ImgPost',
    TopicPost: 'TopicPost',
    ImgTopicPost: 'ImgTopicPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "aboutMe" | "topicAboutMe" | "imgTopicAboutMe" | "post" | "imgPost" | "topicPost" | "imgTopicPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AboutMe: {
        payload: Prisma.$AboutMePayload<ExtArgs>
        fields: Prisma.AboutMeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutMeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutMeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload>
          }
          findFirst: {
            args: Prisma.AboutMeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutMeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload>
          }
          findMany: {
            args: Prisma.AboutMeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload>[]
          }
          create: {
            args: Prisma.AboutMeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload>
          }
          createMany: {
            args: Prisma.AboutMeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AboutMeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload>
          }
          update: {
            args: Prisma.AboutMeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload>
          }
          deleteMany: {
            args: Prisma.AboutMeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutMeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutMeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutMePayload>
          }
          aggregate: {
            args: Prisma.AboutMeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutMe>
          }
          groupBy: {
            args: Prisma.AboutMeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutMeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutMeCountArgs<ExtArgs>
            result: $Utils.Optional<AboutMeCountAggregateOutputType> | number
          }
        }
      }
      TopicAboutMe: {
        payload: Prisma.$TopicAboutMePayload<ExtArgs>
        fields: Prisma.TopicAboutMeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicAboutMeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicAboutMeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload>
          }
          findFirst: {
            args: Prisma.TopicAboutMeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicAboutMeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload>
          }
          findMany: {
            args: Prisma.TopicAboutMeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload>[]
          }
          create: {
            args: Prisma.TopicAboutMeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload>
          }
          createMany: {
            args: Prisma.TopicAboutMeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TopicAboutMeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload>
          }
          update: {
            args: Prisma.TopicAboutMeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload>
          }
          deleteMany: {
            args: Prisma.TopicAboutMeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicAboutMeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TopicAboutMeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicAboutMePayload>
          }
          aggregate: {
            args: Prisma.TopicAboutMeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopicAboutMe>
          }
          groupBy: {
            args: Prisma.TopicAboutMeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicAboutMeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicAboutMeCountArgs<ExtArgs>
            result: $Utils.Optional<TopicAboutMeCountAggregateOutputType> | number
          }
        }
      }
      ImgTopicAboutMe: {
        payload: Prisma.$ImgTopicAboutMePayload<ExtArgs>
        fields: Prisma.ImgTopicAboutMeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImgTopicAboutMeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImgTopicAboutMeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload>
          }
          findFirst: {
            args: Prisma.ImgTopicAboutMeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImgTopicAboutMeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload>
          }
          findMany: {
            args: Prisma.ImgTopicAboutMeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload>[]
          }
          create: {
            args: Prisma.ImgTopicAboutMeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload>
          }
          createMany: {
            args: Prisma.ImgTopicAboutMeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImgTopicAboutMeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload>
          }
          update: {
            args: Prisma.ImgTopicAboutMeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload>
          }
          deleteMany: {
            args: Prisma.ImgTopicAboutMeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImgTopicAboutMeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImgTopicAboutMeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicAboutMePayload>
          }
          aggregate: {
            args: Prisma.ImgTopicAboutMeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImgTopicAboutMe>
          }
          groupBy: {
            args: Prisma.ImgTopicAboutMeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImgTopicAboutMeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImgTopicAboutMeCountArgs<ExtArgs>
            result: $Utils.Optional<ImgTopicAboutMeCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      ImgPost: {
        payload: Prisma.$ImgPostPayload<ExtArgs>
        fields: Prisma.ImgPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImgPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImgPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload>
          }
          findFirst: {
            args: Prisma.ImgPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImgPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload>
          }
          findMany: {
            args: Prisma.ImgPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload>[]
          }
          create: {
            args: Prisma.ImgPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload>
          }
          createMany: {
            args: Prisma.ImgPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImgPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload>
          }
          update: {
            args: Prisma.ImgPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload>
          }
          deleteMany: {
            args: Prisma.ImgPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImgPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImgPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPostPayload>
          }
          aggregate: {
            args: Prisma.ImgPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImgPost>
          }
          groupBy: {
            args: Prisma.ImgPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImgPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImgPostCountArgs<ExtArgs>
            result: $Utils.Optional<ImgPostCountAggregateOutputType> | number
          }
        }
      }
      TopicPost: {
        payload: Prisma.$TopicPostPayload<ExtArgs>
        fields: Prisma.TopicPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload>
          }
          findFirst: {
            args: Prisma.TopicPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload>
          }
          findMany: {
            args: Prisma.TopicPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload>[]
          }
          create: {
            args: Prisma.TopicPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload>
          }
          createMany: {
            args: Prisma.TopicPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TopicPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload>
          }
          update: {
            args: Prisma.TopicPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload>
          }
          deleteMany: {
            args: Prisma.TopicPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TopicPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPostPayload>
          }
          aggregate: {
            args: Prisma.TopicPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopicPost>
          }
          groupBy: {
            args: Prisma.TopicPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicPostCountArgs<ExtArgs>
            result: $Utils.Optional<TopicPostCountAggregateOutputType> | number
          }
        }
      }
      ImgTopicPost: {
        payload: Prisma.$ImgTopicPostPayload<ExtArgs>
        fields: Prisma.ImgTopicPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImgTopicPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImgTopicPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload>
          }
          findFirst: {
            args: Prisma.ImgTopicPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImgTopicPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload>
          }
          findMany: {
            args: Prisma.ImgTopicPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload>[]
          }
          create: {
            args: Prisma.ImgTopicPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload>
          }
          createMany: {
            args: Prisma.ImgTopicPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImgTopicPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload>
          }
          update: {
            args: Prisma.ImgTopicPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload>
          }
          deleteMany: {
            args: Prisma.ImgTopicPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImgTopicPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImgTopicPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgTopicPostPayload>
          }
          aggregate: {
            args: Prisma.ImgTopicPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImgTopicPost>
          }
          groupBy: {
            args: Prisma.ImgTopicPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImgTopicPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImgTopicPostCountArgs<ExtArgs>
            result: $Utils.Optional<ImgTopicPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    aboutMe?: AboutMeOmit
    topicAboutMe?: TopicAboutMeOmit
    imgTopicAboutMe?: ImgTopicAboutMeOmit
    post?: PostOmit
    imgPost?: ImgPostOmit
    topicPost?: TopicPostOmit
    imgTopicPost?: ImgTopicPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    aboutMe: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    aboutMe?: boolean | UserCountOutputTypeCountAboutMeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAboutMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutMeWhereInput
  }


  /**
   * Count Type AboutMeCountOutputType
   */

  export type AboutMeCountOutputType = {
    topicAboutMe: number
  }

  export type AboutMeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicAboutMe?: boolean | AboutMeCountOutputTypeCountTopicAboutMeArgs
  }

  // Custom InputTypes
  /**
   * AboutMeCountOutputType without action
   */
  export type AboutMeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMeCountOutputType
     */
    select?: AboutMeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AboutMeCountOutputType without action
   */
  export type AboutMeCountOutputTypeCountTopicAboutMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicAboutMeWhereInput
  }


  /**
   * Count Type TopicAboutMeCountOutputType
   */

  export type TopicAboutMeCountOutputType = {
    imgTopicAboutMe: number
  }

  export type TopicAboutMeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imgTopicAboutMe?: boolean | TopicAboutMeCountOutputTypeCountImgTopicAboutMeArgs
  }

  // Custom InputTypes
  /**
   * TopicAboutMeCountOutputType without action
   */
  export type TopicAboutMeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMeCountOutputType
     */
    select?: TopicAboutMeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicAboutMeCountOutputType without action
   */
  export type TopicAboutMeCountOutputTypeCountImgTopicAboutMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgTopicAboutMeWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    imgPost: number
    topicPost: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imgPost?: boolean | PostCountOutputTypeCountImgPostArgs
    topicPost?: boolean | PostCountOutputTypeCountTopicPostArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountImgPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgPostWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTopicPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicPostWhereInput
  }


  /**
   * Count Type TopicPostCountOutputType
   */

  export type TopicPostCountOutputType = {
    imgTopicPost: number
  }

  export type TopicPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imgTopicPost?: boolean | TopicPostCountOutputTypeCountImgTopicPostArgs
  }

  // Custom InputTypes
  /**
   * TopicPostCountOutputType without action
   */
  export type TopicPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPostCountOutputType
     */
    select?: TopicPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicPostCountOutputType without action
   */
  export type TopicPostCountOutputTypeCountImgTopicPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgTopicPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    imgUrl: string | null
    filePath: string | null
    password: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAd: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    imgUrl: string | null
    filePath: string | null
    password: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAd: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    imgUrl: number
    filePath: number
    password: number
    refreshToken: number
    createdAt: number
    updatedAd: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    imgUrl?: true
    filePath?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAd?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    imgUrl?: true
    filePath?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAd?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    imgUrl?: true
    filePath?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAd?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    imgUrl: string | null
    filePath: string | null
    password: string
    refreshToken: string | null
    createdAt: Date
    updatedAd: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    imgUrl?: boolean
    filePath?: boolean
    password?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    aboutMe?: boolean | User$aboutMeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    imgUrl?: boolean
    filePath?: boolean
    password?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAd?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "imgUrl" | "filePath" | "password" | "refreshToken" | "createdAt" | "updatedAd", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    aboutMe?: boolean | User$aboutMeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      aboutMe: Prisma.$AboutMePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      imgUrl: string | null
      filePath: string | null
      password: string
      refreshToken: string | null
      createdAt: Date
      updatedAd: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aboutMe<T extends User$aboutMeArgs<ExtArgs> = {}>(args?: Subset<T, User$aboutMeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly imgUrl: FieldRef<"User", 'String'>
    readonly filePath: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAd: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.aboutMe
   */
  export type User$aboutMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    where?: AboutMeWhereInput
    orderBy?: AboutMeOrderByWithRelationInput | AboutMeOrderByWithRelationInput[]
    cursor?: AboutMeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AboutMeScalarFieldEnum | AboutMeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AboutMe
   */

  export type AggregateAboutMe = {
    _count: AboutMeCountAggregateOutputType | null
    _avg: AboutMeAvgAggregateOutputType | null
    _sum: AboutMeSumAggregateOutputType | null
    _min: AboutMeMinAggregateOutputType | null
    _max: AboutMeMaxAggregateOutputType | null
  }

  export type AboutMeAvgAggregateOutputType = {
    year: number | null
    month: number | null
  }

  export type AboutMeSumAggregateOutputType = {
    year: number | null
    month: number | null
  }

  export type AboutMeMinAggregateOutputType = {
    id: string | null
    year: number | null
    month: number | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    userId: string | null
  }

  export type AboutMeMaxAggregateOutputType = {
    id: string | null
    year: number | null
    month: number | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    userId: string | null
  }

  export type AboutMeCountAggregateOutputType = {
    id: number
    year: number
    month: number
    isDelete: number
    createdAt: number
    updatedAd: number
    userId: number
    _all: number
  }


  export type AboutMeAvgAggregateInputType = {
    year?: true
    month?: true
  }

  export type AboutMeSumAggregateInputType = {
    year?: true
    month?: true
  }

  export type AboutMeMinAggregateInputType = {
    id?: true
    year?: true
    month?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    userId?: true
  }

  export type AboutMeMaxAggregateInputType = {
    id?: true
    year?: true
    month?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    userId?: true
  }

  export type AboutMeCountAggregateInputType = {
    id?: true
    year?: true
    month?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    userId?: true
    _all?: true
  }

  export type AboutMeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutMe to aggregate.
     */
    where?: AboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutMes to fetch.
     */
    orderBy?: AboutMeOrderByWithRelationInput | AboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutMes
    **/
    _count?: true | AboutMeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutMeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutMeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutMeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutMeMaxAggregateInputType
  }

  export type GetAboutMeAggregateType<T extends AboutMeAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutMe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutMe[P]>
      : GetScalarType<T[P], AggregateAboutMe[P]>
  }




  export type AboutMeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutMeWhereInput
    orderBy?: AboutMeOrderByWithAggregationInput | AboutMeOrderByWithAggregationInput[]
    by: AboutMeScalarFieldEnum[] | AboutMeScalarFieldEnum
    having?: AboutMeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutMeCountAggregateInputType | true
    _avg?: AboutMeAvgAggregateInputType
    _sum?: AboutMeSumAggregateInputType
    _min?: AboutMeMinAggregateInputType
    _max?: AboutMeMaxAggregateInputType
  }

  export type AboutMeGroupByOutputType = {
    id: string
    year: number
    month: number
    isDelete: boolean
    createdAt: Date
    updatedAd: Date
    userId: string | null
    _count: AboutMeCountAggregateOutputType | null
    _avg: AboutMeAvgAggregateOutputType | null
    _sum: AboutMeSumAggregateOutputType | null
    _min: AboutMeMinAggregateOutputType | null
    _max: AboutMeMaxAggregateOutputType | null
  }

  type GetAboutMeGroupByPayload<T extends AboutMeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutMeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutMeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutMeGroupByOutputType[P]>
            : GetScalarType<T[P], AboutMeGroupByOutputType[P]>
        }
      >
    >


  export type AboutMeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    userId?: boolean
    user?: boolean | AboutMe$userArgs<ExtArgs>
    topicAboutMe?: boolean | AboutMe$topicAboutMeArgs<ExtArgs>
    _count?: boolean | AboutMeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aboutMe"]>



  export type AboutMeSelectScalar = {
    id?: boolean
    year?: boolean
    month?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    userId?: boolean
  }

  export type AboutMeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "month" | "isDelete" | "createdAt" | "updatedAd" | "userId", ExtArgs["result"]["aboutMe"]>
  export type AboutMeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AboutMe$userArgs<ExtArgs>
    topicAboutMe?: boolean | AboutMe$topicAboutMeArgs<ExtArgs>
    _count?: boolean | AboutMeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AboutMePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutMe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      topicAboutMe: Prisma.$TopicAboutMePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      month: number
      isDelete: boolean
      createdAt: Date
      updatedAd: Date
      userId: string | null
    }, ExtArgs["result"]["aboutMe"]>
    composites: {}
  }

  type AboutMeGetPayload<S extends boolean | null | undefined | AboutMeDefaultArgs> = $Result.GetResult<Prisma.$AboutMePayload, S>

  type AboutMeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutMeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutMeCountAggregateInputType | true
    }

  export interface AboutMeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutMe'], meta: { name: 'AboutMe' } }
    /**
     * Find zero or one AboutMe that matches the filter.
     * @param {AboutMeFindUniqueArgs} args - Arguments to find a AboutMe
     * @example
     * // Get one AboutMe
     * const aboutMe = await prisma.aboutMe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutMeFindUniqueArgs>(args: SelectSubset<T, AboutMeFindUniqueArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutMe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutMeFindUniqueOrThrowArgs} args - Arguments to find a AboutMe
     * @example
     * // Get one AboutMe
     * const aboutMe = await prisma.aboutMe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutMeFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutMeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutMe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutMeFindFirstArgs} args - Arguments to find a AboutMe
     * @example
     * // Get one AboutMe
     * const aboutMe = await prisma.aboutMe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutMeFindFirstArgs>(args?: SelectSubset<T, AboutMeFindFirstArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutMe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutMeFindFirstOrThrowArgs} args - Arguments to find a AboutMe
     * @example
     * // Get one AboutMe
     * const aboutMe = await prisma.aboutMe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutMeFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutMeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutMes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutMeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutMes
     * const aboutMes = await prisma.aboutMe.findMany()
     * 
     * // Get first 10 AboutMes
     * const aboutMes = await prisma.aboutMe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutMeWithIdOnly = await prisma.aboutMe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutMeFindManyArgs>(args?: SelectSubset<T, AboutMeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutMe.
     * @param {AboutMeCreateArgs} args - Arguments to create a AboutMe.
     * @example
     * // Create one AboutMe
     * const AboutMe = await prisma.aboutMe.create({
     *   data: {
     *     // ... data to create a AboutMe
     *   }
     * })
     * 
     */
    create<T extends AboutMeCreateArgs>(args: SelectSubset<T, AboutMeCreateArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutMes.
     * @param {AboutMeCreateManyArgs} args - Arguments to create many AboutMes.
     * @example
     * // Create many AboutMes
     * const aboutMe = await prisma.aboutMe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutMeCreateManyArgs>(args?: SelectSubset<T, AboutMeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AboutMe.
     * @param {AboutMeDeleteArgs} args - Arguments to delete one AboutMe.
     * @example
     * // Delete one AboutMe
     * const AboutMe = await prisma.aboutMe.delete({
     *   where: {
     *     // ... filter to delete one AboutMe
     *   }
     * })
     * 
     */
    delete<T extends AboutMeDeleteArgs>(args: SelectSubset<T, AboutMeDeleteArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutMe.
     * @param {AboutMeUpdateArgs} args - Arguments to update one AboutMe.
     * @example
     * // Update one AboutMe
     * const aboutMe = await prisma.aboutMe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutMeUpdateArgs>(args: SelectSubset<T, AboutMeUpdateArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutMes.
     * @param {AboutMeDeleteManyArgs} args - Arguments to filter AboutMes to delete.
     * @example
     * // Delete a few AboutMes
     * const { count } = await prisma.aboutMe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutMeDeleteManyArgs>(args?: SelectSubset<T, AboutMeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutMes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutMeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutMes
     * const aboutMe = await prisma.aboutMe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutMeUpdateManyArgs>(args: SelectSubset<T, AboutMeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutMe.
     * @param {AboutMeUpsertArgs} args - Arguments to update or create a AboutMe.
     * @example
     * // Update or create a AboutMe
     * const aboutMe = await prisma.aboutMe.upsert({
     *   create: {
     *     // ... data to create a AboutMe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutMe we want to update
     *   }
     * })
     */
    upsert<T extends AboutMeUpsertArgs>(args: SelectSubset<T, AboutMeUpsertArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutMes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutMeCountArgs} args - Arguments to filter AboutMes to count.
     * @example
     * // Count the number of AboutMes
     * const count = await prisma.aboutMe.count({
     *   where: {
     *     // ... the filter for the AboutMes we want to count
     *   }
     * })
    **/
    count<T extends AboutMeCountArgs>(
      args?: Subset<T, AboutMeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutMeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutMe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutMeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutMeAggregateArgs>(args: Subset<T, AboutMeAggregateArgs>): Prisma.PrismaPromise<GetAboutMeAggregateType<T>>

    /**
     * Group by AboutMe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutMeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutMeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutMeGroupByArgs['orderBy'] }
        : { orderBy?: AboutMeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutMeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutMeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutMe model
   */
  readonly fields: AboutMeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutMe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutMeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AboutMe$userArgs<ExtArgs> = {}>(args?: Subset<T, AboutMe$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    topicAboutMe<T extends AboutMe$topicAboutMeArgs<ExtArgs> = {}>(args?: Subset<T, AboutMe$topicAboutMeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutMe model
   */
  interface AboutMeFieldRefs {
    readonly id: FieldRef<"AboutMe", 'String'>
    readonly year: FieldRef<"AboutMe", 'Int'>
    readonly month: FieldRef<"AboutMe", 'Int'>
    readonly isDelete: FieldRef<"AboutMe", 'Boolean'>
    readonly createdAt: FieldRef<"AboutMe", 'DateTime'>
    readonly updatedAd: FieldRef<"AboutMe", 'DateTime'>
    readonly userId: FieldRef<"AboutMe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AboutMe findUnique
   */
  export type AboutMeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * Filter, which AboutMe to fetch.
     */
    where: AboutMeWhereUniqueInput
  }

  /**
   * AboutMe findUniqueOrThrow
   */
  export type AboutMeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * Filter, which AboutMe to fetch.
     */
    where: AboutMeWhereUniqueInput
  }

  /**
   * AboutMe findFirst
   */
  export type AboutMeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * Filter, which AboutMe to fetch.
     */
    where?: AboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutMes to fetch.
     */
    orderBy?: AboutMeOrderByWithRelationInput | AboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutMes.
     */
    cursor?: AboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutMes.
     */
    distinct?: AboutMeScalarFieldEnum | AboutMeScalarFieldEnum[]
  }

  /**
   * AboutMe findFirstOrThrow
   */
  export type AboutMeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * Filter, which AboutMe to fetch.
     */
    where?: AboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutMes to fetch.
     */
    orderBy?: AboutMeOrderByWithRelationInput | AboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutMes.
     */
    cursor?: AboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutMes.
     */
    distinct?: AboutMeScalarFieldEnum | AboutMeScalarFieldEnum[]
  }

  /**
   * AboutMe findMany
   */
  export type AboutMeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * Filter, which AboutMes to fetch.
     */
    where?: AboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutMes to fetch.
     */
    orderBy?: AboutMeOrderByWithRelationInput | AboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutMes.
     */
    cursor?: AboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutMes.
     */
    skip?: number
    distinct?: AboutMeScalarFieldEnum | AboutMeScalarFieldEnum[]
  }

  /**
   * AboutMe create
   */
  export type AboutMeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * The data needed to create a AboutMe.
     */
    data: XOR<AboutMeCreateInput, AboutMeUncheckedCreateInput>
  }

  /**
   * AboutMe createMany
   */
  export type AboutMeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutMes.
     */
    data: AboutMeCreateManyInput | AboutMeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutMe update
   */
  export type AboutMeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * The data needed to update a AboutMe.
     */
    data: XOR<AboutMeUpdateInput, AboutMeUncheckedUpdateInput>
    /**
     * Choose, which AboutMe to update.
     */
    where: AboutMeWhereUniqueInput
  }

  /**
   * AboutMe updateMany
   */
  export type AboutMeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutMes.
     */
    data: XOR<AboutMeUpdateManyMutationInput, AboutMeUncheckedUpdateManyInput>
    /**
     * Filter which AboutMes to update
     */
    where?: AboutMeWhereInput
    /**
     * Limit how many AboutMes to update.
     */
    limit?: number
  }

  /**
   * AboutMe upsert
   */
  export type AboutMeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * The filter to search for the AboutMe to update in case it exists.
     */
    where: AboutMeWhereUniqueInput
    /**
     * In case the AboutMe found by the `where` argument doesn't exist, create a new AboutMe with this data.
     */
    create: XOR<AboutMeCreateInput, AboutMeUncheckedCreateInput>
    /**
     * In case the AboutMe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutMeUpdateInput, AboutMeUncheckedUpdateInput>
  }

  /**
   * AboutMe delete
   */
  export type AboutMeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    /**
     * Filter which AboutMe to delete.
     */
    where: AboutMeWhereUniqueInput
  }

  /**
   * AboutMe deleteMany
   */
  export type AboutMeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutMes to delete
     */
    where?: AboutMeWhereInput
    /**
     * Limit how many AboutMes to delete.
     */
    limit?: number
  }

  /**
   * AboutMe.user
   */
  export type AboutMe$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AboutMe.topicAboutMe
   */
  export type AboutMe$topicAboutMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    where?: TopicAboutMeWhereInput
    orderBy?: TopicAboutMeOrderByWithRelationInput | TopicAboutMeOrderByWithRelationInput[]
    cursor?: TopicAboutMeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicAboutMeScalarFieldEnum | TopicAboutMeScalarFieldEnum[]
  }

  /**
   * AboutMe without action
   */
  export type AboutMeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
  }


  /**
   * Model TopicAboutMe
   */

  export type AggregateTopicAboutMe = {
    _count: TopicAboutMeCountAggregateOutputType | null
    _min: TopicAboutMeMinAggregateOutputType | null
    _max: TopicAboutMeMaxAggregateOutputType | null
  }

  export type TopicAboutMeMinAggregateOutputType = {
    id: string | null
    nameTopic: string | null
    detail: string | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    aboutMeId: string | null
  }

  export type TopicAboutMeMaxAggregateOutputType = {
    id: string | null
    nameTopic: string | null
    detail: string | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    aboutMeId: string | null
  }

  export type TopicAboutMeCountAggregateOutputType = {
    id: number
    nameTopic: number
    detail: number
    isDelete: number
    createdAt: number
    updatedAd: number
    aboutMeId: number
    _all: number
  }


  export type TopicAboutMeMinAggregateInputType = {
    id?: true
    nameTopic?: true
    detail?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    aboutMeId?: true
  }

  export type TopicAboutMeMaxAggregateInputType = {
    id?: true
    nameTopic?: true
    detail?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    aboutMeId?: true
  }

  export type TopicAboutMeCountAggregateInputType = {
    id?: true
    nameTopic?: true
    detail?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    aboutMeId?: true
    _all?: true
  }

  export type TopicAboutMeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicAboutMe to aggregate.
     */
    where?: TopicAboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicAboutMes to fetch.
     */
    orderBy?: TopicAboutMeOrderByWithRelationInput | TopicAboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicAboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicAboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicAboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopicAboutMes
    **/
    _count?: true | TopicAboutMeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicAboutMeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicAboutMeMaxAggregateInputType
  }

  export type GetTopicAboutMeAggregateType<T extends TopicAboutMeAggregateArgs> = {
        [P in keyof T & keyof AggregateTopicAboutMe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopicAboutMe[P]>
      : GetScalarType<T[P], AggregateTopicAboutMe[P]>
  }




  export type TopicAboutMeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicAboutMeWhereInput
    orderBy?: TopicAboutMeOrderByWithAggregationInput | TopicAboutMeOrderByWithAggregationInput[]
    by: TopicAboutMeScalarFieldEnum[] | TopicAboutMeScalarFieldEnum
    having?: TopicAboutMeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicAboutMeCountAggregateInputType | true
    _min?: TopicAboutMeMinAggregateInputType
    _max?: TopicAboutMeMaxAggregateInputType
  }

  export type TopicAboutMeGroupByOutputType = {
    id: string
    nameTopic: string
    detail: string
    isDelete: boolean
    createdAt: Date
    updatedAd: Date
    aboutMeId: string | null
    _count: TopicAboutMeCountAggregateOutputType | null
    _min: TopicAboutMeMinAggregateOutputType | null
    _max: TopicAboutMeMaxAggregateOutputType | null
  }

  type GetTopicAboutMeGroupByPayload<T extends TopicAboutMeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicAboutMeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicAboutMeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicAboutMeGroupByOutputType[P]>
            : GetScalarType<T[P], TopicAboutMeGroupByOutputType[P]>
        }
      >
    >


  export type TopicAboutMeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameTopic?: boolean
    detail?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    aboutMeId?: boolean
    aboutMe?: boolean | TopicAboutMe$aboutMeArgs<ExtArgs>
    imgTopicAboutMe?: boolean | TopicAboutMe$imgTopicAboutMeArgs<ExtArgs>
    _count?: boolean | TopicAboutMeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicAboutMe"]>



  export type TopicAboutMeSelectScalar = {
    id?: boolean
    nameTopic?: boolean
    detail?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    aboutMeId?: boolean
  }

  export type TopicAboutMeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameTopic" | "detail" | "isDelete" | "createdAt" | "updatedAd" | "aboutMeId", ExtArgs["result"]["topicAboutMe"]>
  export type TopicAboutMeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aboutMe?: boolean | TopicAboutMe$aboutMeArgs<ExtArgs>
    imgTopicAboutMe?: boolean | TopicAboutMe$imgTopicAboutMeArgs<ExtArgs>
    _count?: boolean | TopicAboutMeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TopicAboutMePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopicAboutMe"
    objects: {
      aboutMe: Prisma.$AboutMePayload<ExtArgs> | null
      imgTopicAboutMe: Prisma.$ImgTopicAboutMePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameTopic: string
      detail: string
      isDelete: boolean
      createdAt: Date
      updatedAd: Date
      aboutMeId: string | null
    }, ExtArgs["result"]["topicAboutMe"]>
    composites: {}
  }

  type TopicAboutMeGetPayload<S extends boolean | null | undefined | TopicAboutMeDefaultArgs> = $Result.GetResult<Prisma.$TopicAboutMePayload, S>

  type TopicAboutMeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicAboutMeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicAboutMeCountAggregateInputType | true
    }

  export interface TopicAboutMeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopicAboutMe'], meta: { name: 'TopicAboutMe' } }
    /**
     * Find zero or one TopicAboutMe that matches the filter.
     * @param {TopicAboutMeFindUniqueArgs} args - Arguments to find a TopicAboutMe
     * @example
     * // Get one TopicAboutMe
     * const topicAboutMe = await prisma.topicAboutMe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicAboutMeFindUniqueArgs>(args: SelectSubset<T, TopicAboutMeFindUniqueArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopicAboutMe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicAboutMeFindUniqueOrThrowArgs} args - Arguments to find a TopicAboutMe
     * @example
     * // Get one TopicAboutMe
     * const topicAboutMe = await prisma.topicAboutMe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicAboutMeFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicAboutMeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicAboutMe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAboutMeFindFirstArgs} args - Arguments to find a TopicAboutMe
     * @example
     * // Get one TopicAboutMe
     * const topicAboutMe = await prisma.topicAboutMe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicAboutMeFindFirstArgs>(args?: SelectSubset<T, TopicAboutMeFindFirstArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicAboutMe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAboutMeFindFirstOrThrowArgs} args - Arguments to find a TopicAboutMe
     * @example
     * // Get one TopicAboutMe
     * const topicAboutMe = await prisma.topicAboutMe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicAboutMeFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicAboutMeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopicAboutMes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAboutMeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopicAboutMes
     * const topicAboutMes = await prisma.topicAboutMe.findMany()
     * 
     * // Get first 10 TopicAboutMes
     * const topicAboutMes = await prisma.topicAboutMe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicAboutMeWithIdOnly = await prisma.topicAboutMe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicAboutMeFindManyArgs>(args?: SelectSubset<T, TopicAboutMeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopicAboutMe.
     * @param {TopicAboutMeCreateArgs} args - Arguments to create a TopicAboutMe.
     * @example
     * // Create one TopicAboutMe
     * const TopicAboutMe = await prisma.topicAboutMe.create({
     *   data: {
     *     // ... data to create a TopicAboutMe
     *   }
     * })
     * 
     */
    create<T extends TopicAboutMeCreateArgs>(args: SelectSubset<T, TopicAboutMeCreateArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopicAboutMes.
     * @param {TopicAboutMeCreateManyArgs} args - Arguments to create many TopicAboutMes.
     * @example
     * // Create many TopicAboutMes
     * const topicAboutMe = await prisma.topicAboutMe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicAboutMeCreateManyArgs>(args?: SelectSubset<T, TopicAboutMeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TopicAboutMe.
     * @param {TopicAboutMeDeleteArgs} args - Arguments to delete one TopicAboutMe.
     * @example
     * // Delete one TopicAboutMe
     * const TopicAboutMe = await prisma.topicAboutMe.delete({
     *   where: {
     *     // ... filter to delete one TopicAboutMe
     *   }
     * })
     * 
     */
    delete<T extends TopicAboutMeDeleteArgs>(args: SelectSubset<T, TopicAboutMeDeleteArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopicAboutMe.
     * @param {TopicAboutMeUpdateArgs} args - Arguments to update one TopicAboutMe.
     * @example
     * // Update one TopicAboutMe
     * const topicAboutMe = await prisma.topicAboutMe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicAboutMeUpdateArgs>(args: SelectSubset<T, TopicAboutMeUpdateArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopicAboutMes.
     * @param {TopicAboutMeDeleteManyArgs} args - Arguments to filter TopicAboutMes to delete.
     * @example
     * // Delete a few TopicAboutMes
     * const { count } = await prisma.topicAboutMe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicAboutMeDeleteManyArgs>(args?: SelectSubset<T, TopicAboutMeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicAboutMes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAboutMeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopicAboutMes
     * const topicAboutMe = await prisma.topicAboutMe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicAboutMeUpdateManyArgs>(args: SelectSubset<T, TopicAboutMeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TopicAboutMe.
     * @param {TopicAboutMeUpsertArgs} args - Arguments to update or create a TopicAboutMe.
     * @example
     * // Update or create a TopicAboutMe
     * const topicAboutMe = await prisma.topicAboutMe.upsert({
     *   create: {
     *     // ... data to create a TopicAboutMe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopicAboutMe we want to update
     *   }
     * })
     */
    upsert<T extends TopicAboutMeUpsertArgs>(args: SelectSubset<T, TopicAboutMeUpsertArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopicAboutMes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAboutMeCountArgs} args - Arguments to filter TopicAboutMes to count.
     * @example
     * // Count the number of TopicAboutMes
     * const count = await prisma.topicAboutMe.count({
     *   where: {
     *     // ... the filter for the TopicAboutMes we want to count
     *   }
     * })
    **/
    count<T extends TopicAboutMeCountArgs>(
      args?: Subset<T, TopicAboutMeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicAboutMeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopicAboutMe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAboutMeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAboutMeAggregateArgs>(args: Subset<T, TopicAboutMeAggregateArgs>): Prisma.PrismaPromise<GetTopicAboutMeAggregateType<T>>

    /**
     * Group by TopicAboutMe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAboutMeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicAboutMeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicAboutMeGroupByArgs['orderBy'] }
        : { orderBy?: TopicAboutMeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicAboutMeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicAboutMeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopicAboutMe model
   */
  readonly fields: TopicAboutMeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopicAboutMe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicAboutMeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aboutMe<T extends TopicAboutMe$aboutMeArgs<ExtArgs> = {}>(args?: Subset<T, TopicAboutMe$aboutMeArgs<ExtArgs>>): Prisma__AboutMeClient<$Result.GetResult<Prisma.$AboutMePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    imgTopicAboutMe<T extends TopicAboutMe$imgTopicAboutMeArgs<ExtArgs> = {}>(args?: Subset<T, TopicAboutMe$imgTopicAboutMeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopicAboutMe model
   */
  interface TopicAboutMeFieldRefs {
    readonly id: FieldRef<"TopicAboutMe", 'String'>
    readonly nameTopic: FieldRef<"TopicAboutMe", 'String'>
    readonly detail: FieldRef<"TopicAboutMe", 'String'>
    readonly isDelete: FieldRef<"TopicAboutMe", 'Boolean'>
    readonly createdAt: FieldRef<"TopicAboutMe", 'DateTime'>
    readonly updatedAd: FieldRef<"TopicAboutMe", 'DateTime'>
    readonly aboutMeId: FieldRef<"TopicAboutMe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TopicAboutMe findUnique
   */
  export type TopicAboutMeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which TopicAboutMe to fetch.
     */
    where: TopicAboutMeWhereUniqueInput
  }

  /**
   * TopicAboutMe findUniqueOrThrow
   */
  export type TopicAboutMeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which TopicAboutMe to fetch.
     */
    where: TopicAboutMeWhereUniqueInput
  }

  /**
   * TopicAboutMe findFirst
   */
  export type TopicAboutMeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which TopicAboutMe to fetch.
     */
    where?: TopicAboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicAboutMes to fetch.
     */
    orderBy?: TopicAboutMeOrderByWithRelationInput | TopicAboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicAboutMes.
     */
    cursor?: TopicAboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicAboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicAboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicAboutMes.
     */
    distinct?: TopicAboutMeScalarFieldEnum | TopicAboutMeScalarFieldEnum[]
  }

  /**
   * TopicAboutMe findFirstOrThrow
   */
  export type TopicAboutMeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which TopicAboutMe to fetch.
     */
    where?: TopicAboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicAboutMes to fetch.
     */
    orderBy?: TopicAboutMeOrderByWithRelationInput | TopicAboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicAboutMes.
     */
    cursor?: TopicAboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicAboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicAboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicAboutMes.
     */
    distinct?: TopicAboutMeScalarFieldEnum | TopicAboutMeScalarFieldEnum[]
  }

  /**
   * TopicAboutMe findMany
   */
  export type TopicAboutMeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which TopicAboutMes to fetch.
     */
    where?: TopicAboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicAboutMes to fetch.
     */
    orderBy?: TopicAboutMeOrderByWithRelationInput | TopicAboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopicAboutMes.
     */
    cursor?: TopicAboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicAboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicAboutMes.
     */
    skip?: number
    distinct?: TopicAboutMeScalarFieldEnum | TopicAboutMeScalarFieldEnum[]
  }

  /**
   * TopicAboutMe create
   */
  export type TopicAboutMeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * The data needed to create a TopicAboutMe.
     */
    data: XOR<TopicAboutMeCreateInput, TopicAboutMeUncheckedCreateInput>
  }

  /**
   * TopicAboutMe createMany
   */
  export type TopicAboutMeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopicAboutMes.
     */
    data: TopicAboutMeCreateManyInput | TopicAboutMeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopicAboutMe update
   */
  export type TopicAboutMeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * The data needed to update a TopicAboutMe.
     */
    data: XOR<TopicAboutMeUpdateInput, TopicAboutMeUncheckedUpdateInput>
    /**
     * Choose, which TopicAboutMe to update.
     */
    where: TopicAboutMeWhereUniqueInput
  }

  /**
   * TopicAboutMe updateMany
   */
  export type TopicAboutMeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopicAboutMes.
     */
    data: XOR<TopicAboutMeUpdateManyMutationInput, TopicAboutMeUncheckedUpdateManyInput>
    /**
     * Filter which TopicAboutMes to update
     */
    where?: TopicAboutMeWhereInput
    /**
     * Limit how many TopicAboutMes to update.
     */
    limit?: number
  }

  /**
   * TopicAboutMe upsert
   */
  export type TopicAboutMeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * The filter to search for the TopicAboutMe to update in case it exists.
     */
    where: TopicAboutMeWhereUniqueInput
    /**
     * In case the TopicAboutMe found by the `where` argument doesn't exist, create a new TopicAboutMe with this data.
     */
    create: XOR<TopicAboutMeCreateInput, TopicAboutMeUncheckedCreateInput>
    /**
     * In case the TopicAboutMe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicAboutMeUpdateInput, TopicAboutMeUncheckedUpdateInput>
  }

  /**
   * TopicAboutMe delete
   */
  export type TopicAboutMeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter which TopicAboutMe to delete.
     */
    where: TopicAboutMeWhereUniqueInput
  }

  /**
   * TopicAboutMe deleteMany
   */
  export type TopicAboutMeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicAboutMes to delete
     */
    where?: TopicAboutMeWhereInput
    /**
     * Limit how many TopicAboutMes to delete.
     */
    limit?: number
  }

  /**
   * TopicAboutMe.aboutMe
   */
  export type TopicAboutMe$aboutMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutMe
     */
    select?: AboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutMe
     */
    omit?: AboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutMeInclude<ExtArgs> | null
    where?: AboutMeWhereInput
  }

  /**
   * TopicAboutMe.imgTopicAboutMe
   */
  export type TopicAboutMe$imgTopicAboutMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    where?: ImgTopicAboutMeWhereInput
    orderBy?: ImgTopicAboutMeOrderByWithRelationInput | ImgTopicAboutMeOrderByWithRelationInput[]
    cursor?: ImgTopicAboutMeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImgTopicAboutMeScalarFieldEnum | ImgTopicAboutMeScalarFieldEnum[]
  }

  /**
   * TopicAboutMe without action
   */
  export type TopicAboutMeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
  }


  /**
   * Model ImgTopicAboutMe
   */

  export type AggregateImgTopicAboutMe = {
    _count: ImgTopicAboutMeCountAggregateOutputType | null
    _min: ImgTopicAboutMeMinAggregateOutputType | null
    _max: ImgTopicAboutMeMaxAggregateOutputType | null
  }

  export type ImgTopicAboutMeMinAggregateOutputType = {
    id: string | null
    imgUrl: string | null
    filePath: string | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    topicAboutMeId: string | null
  }

  export type ImgTopicAboutMeMaxAggregateOutputType = {
    id: string | null
    imgUrl: string | null
    filePath: string | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    topicAboutMeId: string | null
  }

  export type ImgTopicAboutMeCountAggregateOutputType = {
    id: number
    imgUrl: number
    filePath: number
    isDelete: number
    createdAt: number
    updatedAd: number
    topicAboutMeId: number
    _all: number
  }


  export type ImgTopicAboutMeMinAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    topicAboutMeId?: true
  }

  export type ImgTopicAboutMeMaxAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    topicAboutMeId?: true
  }

  export type ImgTopicAboutMeCountAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    topicAboutMeId?: true
    _all?: true
  }

  export type ImgTopicAboutMeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgTopicAboutMe to aggregate.
     */
    where?: ImgTopicAboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgTopicAboutMes to fetch.
     */
    orderBy?: ImgTopicAboutMeOrderByWithRelationInput | ImgTopicAboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImgTopicAboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgTopicAboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgTopicAboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImgTopicAboutMes
    **/
    _count?: true | ImgTopicAboutMeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImgTopicAboutMeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImgTopicAboutMeMaxAggregateInputType
  }

  export type GetImgTopicAboutMeAggregateType<T extends ImgTopicAboutMeAggregateArgs> = {
        [P in keyof T & keyof AggregateImgTopicAboutMe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImgTopicAboutMe[P]>
      : GetScalarType<T[P], AggregateImgTopicAboutMe[P]>
  }




  export type ImgTopicAboutMeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgTopicAboutMeWhereInput
    orderBy?: ImgTopicAboutMeOrderByWithAggregationInput | ImgTopicAboutMeOrderByWithAggregationInput[]
    by: ImgTopicAboutMeScalarFieldEnum[] | ImgTopicAboutMeScalarFieldEnum
    having?: ImgTopicAboutMeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImgTopicAboutMeCountAggregateInputType | true
    _min?: ImgTopicAboutMeMinAggregateInputType
    _max?: ImgTopicAboutMeMaxAggregateInputType
  }

  export type ImgTopicAboutMeGroupByOutputType = {
    id: string
    imgUrl: string
    filePath: string | null
    isDelete: boolean
    createdAt: Date
    updatedAd: Date
    topicAboutMeId: string | null
    _count: ImgTopicAboutMeCountAggregateOutputType | null
    _min: ImgTopicAboutMeMinAggregateOutputType | null
    _max: ImgTopicAboutMeMaxAggregateOutputType | null
  }

  type GetImgTopicAboutMeGroupByPayload<T extends ImgTopicAboutMeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImgTopicAboutMeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImgTopicAboutMeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImgTopicAboutMeGroupByOutputType[P]>
            : GetScalarType<T[P], ImgTopicAboutMeGroupByOutputType[P]>
        }
      >
    >


  export type ImgTopicAboutMeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imgUrl?: boolean
    filePath?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    topicAboutMeId?: boolean
    topicAboutMe?: boolean | ImgTopicAboutMe$topicAboutMeArgs<ExtArgs>
  }, ExtArgs["result"]["imgTopicAboutMe"]>



  export type ImgTopicAboutMeSelectScalar = {
    id?: boolean
    imgUrl?: boolean
    filePath?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    topicAboutMeId?: boolean
  }

  export type ImgTopicAboutMeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imgUrl" | "filePath" | "isDelete" | "createdAt" | "updatedAd" | "topicAboutMeId", ExtArgs["result"]["imgTopicAboutMe"]>
  export type ImgTopicAboutMeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicAboutMe?: boolean | ImgTopicAboutMe$topicAboutMeArgs<ExtArgs>
  }

  export type $ImgTopicAboutMePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImgTopicAboutMe"
    objects: {
      topicAboutMe: Prisma.$TopicAboutMePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imgUrl: string
      filePath: string | null
      isDelete: boolean
      createdAt: Date
      updatedAd: Date
      topicAboutMeId: string | null
    }, ExtArgs["result"]["imgTopicAboutMe"]>
    composites: {}
  }

  type ImgTopicAboutMeGetPayload<S extends boolean | null | undefined | ImgTopicAboutMeDefaultArgs> = $Result.GetResult<Prisma.$ImgTopicAboutMePayload, S>

  type ImgTopicAboutMeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImgTopicAboutMeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImgTopicAboutMeCountAggregateInputType | true
    }

  export interface ImgTopicAboutMeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImgTopicAboutMe'], meta: { name: 'ImgTopicAboutMe' } }
    /**
     * Find zero or one ImgTopicAboutMe that matches the filter.
     * @param {ImgTopicAboutMeFindUniqueArgs} args - Arguments to find a ImgTopicAboutMe
     * @example
     * // Get one ImgTopicAboutMe
     * const imgTopicAboutMe = await prisma.imgTopicAboutMe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImgTopicAboutMeFindUniqueArgs>(args: SelectSubset<T, ImgTopicAboutMeFindUniqueArgs<ExtArgs>>): Prisma__ImgTopicAboutMeClient<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImgTopicAboutMe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImgTopicAboutMeFindUniqueOrThrowArgs} args - Arguments to find a ImgTopicAboutMe
     * @example
     * // Get one ImgTopicAboutMe
     * const imgTopicAboutMe = await prisma.imgTopicAboutMe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImgTopicAboutMeFindUniqueOrThrowArgs>(args: SelectSubset<T, ImgTopicAboutMeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImgTopicAboutMeClient<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgTopicAboutMe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicAboutMeFindFirstArgs} args - Arguments to find a ImgTopicAboutMe
     * @example
     * // Get one ImgTopicAboutMe
     * const imgTopicAboutMe = await prisma.imgTopicAboutMe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImgTopicAboutMeFindFirstArgs>(args?: SelectSubset<T, ImgTopicAboutMeFindFirstArgs<ExtArgs>>): Prisma__ImgTopicAboutMeClient<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgTopicAboutMe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicAboutMeFindFirstOrThrowArgs} args - Arguments to find a ImgTopicAboutMe
     * @example
     * // Get one ImgTopicAboutMe
     * const imgTopicAboutMe = await prisma.imgTopicAboutMe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImgTopicAboutMeFindFirstOrThrowArgs>(args?: SelectSubset<T, ImgTopicAboutMeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImgTopicAboutMeClient<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImgTopicAboutMes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicAboutMeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImgTopicAboutMes
     * const imgTopicAboutMes = await prisma.imgTopicAboutMe.findMany()
     * 
     * // Get first 10 ImgTopicAboutMes
     * const imgTopicAboutMes = await prisma.imgTopicAboutMe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imgTopicAboutMeWithIdOnly = await prisma.imgTopicAboutMe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImgTopicAboutMeFindManyArgs>(args?: SelectSubset<T, ImgTopicAboutMeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImgTopicAboutMe.
     * @param {ImgTopicAboutMeCreateArgs} args - Arguments to create a ImgTopicAboutMe.
     * @example
     * // Create one ImgTopicAboutMe
     * const ImgTopicAboutMe = await prisma.imgTopicAboutMe.create({
     *   data: {
     *     // ... data to create a ImgTopicAboutMe
     *   }
     * })
     * 
     */
    create<T extends ImgTopicAboutMeCreateArgs>(args: SelectSubset<T, ImgTopicAboutMeCreateArgs<ExtArgs>>): Prisma__ImgTopicAboutMeClient<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImgTopicAboutMes.
     * @param {ImgTopicAboutMeCreateManyArgs} args - Arguments to create many ImgTopicAboutMes.
     * @example
     * // Create many ImgTopicAboutMes
     * const imgTopicAboutMe = await prisma.imgTopicAboutMe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImgTopicAboutMeCreateManyArgs>(args?: SelectSubset<T, ImgTopicAboutMeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImgTopicAboutMe.
     * @param {ImgTopicAboutMeDeleteArgs} args - Arguments to delete one ImgTopicAboutMe.
     * @example
     * // Delete one ImgTopicAboutMe
     * const ImgTopicAboutMe = await prisma.imgTopicAboutMe.delete({
     *   where: {
     *     // ... filter to delete one ImgTopicAboutMe
     *   }
     * })
     * 
     */
    delete<T extends ImgTopicAboutMeDeleteArgs>(args: SelectSubset<T, ImgTopicAboutMeDeleteArgs<ExtArgs>>): Prisma__ImgTopicAboutMeClient<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImgTopicAboutMe.
     * @param {ImgTopicAboutMeUpdateArgs} args - Arguments to update one ImgTopicAboutMe.
     * @example
     * // Update one ImgTopicAboutMe
     * const imgTopicAboutMe = await prisma.imgTopicAboutMe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImgTopicAboutMeUpdateArgs>(args: SelectSubset<T, ImgTopicAboutMeUpdateArgs<ExtArgs>>): Prisma__ImgTopicAboutMeClient<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImgTopicAboutMes.
     * @param {ImgTopicAboutMeDeleteManyArgs} args - Arguments to filter ImgTopicAboutMes to delete.
     * @example
     * // Delete a few ImgTopicAboutMes
     * const { count } = await prisma.imgTopicAboutMe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImgTopicAboutMeDeleteManyArgs>(args?: SelectSubset<T, ImgTopicAboutMeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImgTopicAboutMes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicAboutMeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImgTopicAboutMes
     * const imgTopicAboutMe = await prisma.imgTopicAboutMe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImgTopicAboutMeUpdateManyArgs>(args: SelectSubset<T, ImgTopicAboutMeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImgTopicAboutMe.
     * @param {ImgTopicAboutMeUpsertArgs} args - Arguments to update or create a ImgTopicAboutMe.
     * @example
     * // Update or create a ImgTopicAboutMe
     * const imgTopicAboutMe = await prisma.imgTopicAboutMe.upsert({
     *   create: {
     *     // ... data to create a ImgTopicAboutMe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImgTopicAboutMe we want to update
     *   }
     * })
     */
    upsert<T extends ImgTopicAboutMeUpsertArgs>(args: SelectSubset<T, ImgTopicAboutMeUpsertArgs<ExtArgs>>): Prisma__ImgTopicAboutMeClient<$Result.GetResult<Prisma.$ImgTopicAboutMePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImgTopicAboutMes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicAboutMeCountArgs} args - Arguments to filter ImgTopicAboutMes to count.
     * @example
     * // Count the number of ImgTopicAboutMes
     * const count = await prisma.imgTopicAboutMe.count({
     *   where: {
     *     // ... the filter for the ImgTopicAboutMes we want to count
     *   }
     * })
    **/
    count<T extends ImgTopicAboutMeCountArgs>(
      args?: Subset<T, ImgTopicAboutMeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImgTopicAboutMeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImgTopicAboutMe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicAboutMeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImgTopicAboutMeAggregateArgs>(args: Subset<T, ImgTopicAboutMeAggregateArgs>): Prisma.PrismaPromise<GetImgTopicAboutMeAggregateType<T>>

    /**
     * Group by ImgTopicAboutMe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicAboutMeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImgTopicAboutMeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImgTopicAboutMeGroupByArgs['orderBy'] }
        : { orderBy?: ImgTopicAboutMeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImgTopicAboutMeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImgTopicAboutMeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImgTopicAboutMe model
   */
  readonly fields: ImgTopicAboutMeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImgTopicAboutMe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImgTopicAboutMeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topicAboutMe<T extends ImgTopicAboutMe$topicAboutMeArgs<ExtArgs> = {}>(args?: Subset<T, ImgTopicAboutMe$topicAboutMeArgs<ExtArgs>>): Prisma__TopicAboutMeClient<$Result.GetResult<Prisma.$TopicAboutMePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImgTopicAboutMe model
   */
  interface ImgTopicAboutMeFieldRefs {
    readonly id: FieldRef<"ImgTopicAboutMe", 'String'>
    readonly imgUrl: FieldRef<"ImgTopicAboutMe", 'String'>
    readonly filePath: FieldRef<"ImgTopicAboutMe", 'String'>
    readonly isDelete: FieldRef<"ImgTopicAboutMe", 'Boolean'>
    readonly createdAt: FieldRef<"ImgTopicAboutMe", 'DateTime'>
    readonly updatedAd: FieldRef<"ImgTopicAboutMe", 'DateTime'>
    readonly topicAboutMeId: FieldRef<"ImgTopicAboutMe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImgTopicAboutMe findUnique
   */
  export type ImgTopicAboutMeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicAboutMe to fetch.
     */
    where: ImgTopicAboutMeWhereUniqueInput
  }

  /**
   * ImgTopicAboutMe findUniqueOrThrow
   */
  export type ImgTopicAboutMeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicAboutMe to fetch.
     */
    where: ImgTopicAboutMeWhereUniqueInput
  }

  /**
   * ImgTopicAboutMe findFirst
   */
  export type ImgTopicAboutMeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicAboutMe to fetch.
     */
    where?: ImgTopicAboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgTopicAboutMes to fetch.
     */
    orderBy?: ImgTopicAboutMeOrderByWithRelationInput | ImgTopicAboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgTopicAboutMes.
     */
    cursor?: ImgTopicAboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgTopicAboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgTopicAboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgTopicAboutMes.
     */
    distinct?: ImgTopicAboutMeScalarFieldEnum | ImgTopicAboutMeScalarFieldEnum[]
  }

  /**
   * ImgTopicAboutMe findFirstOrThrow
   */
  export type ImgTopicAboutMeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicAboutMe to fetch.
     */
    where?: ImgTopicAboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgTopicAboutMes to fetch.
     */
    orderBy?: ImgTopicAboutMeOrderByWithRelationInput | ImgTopicAboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgTopicAboutMes.
     */
    cursor?: ImgTopicAboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgTopicAboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgTopicAboutMes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgTopicAboutMes.
     */
    distinct?: ImgTopicAboutMeScalarFieldEnum | ImgTopicAboutMeScalarFieldEnum[]
  }

  /**
   * ImgTopicAboutMe findMany
   */
  export type ImgTopicAboutMeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicAboutMes to fetch.
     */
    where?: ImgTopicAboutMeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgTopicAboutMes to fetch.
     */
    orderBy?: ImgTopicAboutMeOrderByWithRelationInput | ImgTopicAboutMeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImgTopicAboutMes.
     */
    cursor?: ImgTopicAboutMeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgTopicAboutMes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgTopicAboutMes.
     */
    skip?: number
    distinct?: ImgTopicAboutMeScalarFieldEnum | ImgTopicAboutMeScalarFieldEnum[]
  }

  /**
   * ImgTopicAboutMe create
   */
  export type ImgTopicAboutMeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * The data needed to create a ImgTopicAboutMe.
     */
    data: XOR<ImgTopicAboutMeCreateInput, ImgTopicAboutMeUncheckedCreateInput>
  }

  /**
   * ImgTopicAboutMe createMany
   */
  export type ImgTopicAboutMeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImgTopicAboutMes.
     */
    data: ImgTopicAboutMeCreateManyInput | ImgTopicAboutMeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImgTopicAboutMe update
   */
  export type ImgTopicAboutMeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * The data needed to update a ImgTopicAboutMe.
     */
    data: XOR<ImgTopicAboutMeUpdateInput, ImgTopicAboutMeUncheckedUpdateInput>
    /**
     * Choose, which ImgTopicAboutMe to update.
     */
    where: ImgTopicAboutMeWhereUniqueInput
  }

  /**
   * ImgTopicAboutMe updateMany
   */
  export type ImgTopicAboutMeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImgTopicAboutMes.
     */
    data: XOR<ImgTopicAboutMeUpdateManyMutationInput, ImgTopicAboutMeUncheckedUpdateManyInput>
    /**
     * Filter which ImgTopicAboutMes to update
     */
    where?: ImgTopicAboutMeWhereInput
    /**
     * Limit how many ImgTopicAboutMes to update.
     */
    limit?: number
  }

  /**
   * ImgTopicAboutMe upsert
   */
  export type ImgTopicAboutMeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * The filter to search for the ImgTopicAboutMe to update in case it exists.
     */
    where: ImgTopicAboutMeWhereUniqueInput
    /**
     * In case the ImgTopicAboutMe found by the `where` argument doesn't exist, create a new ImgTopicAboutMe with this data.
     */
    create: XOR<ImgTopicAboutMeCreateInput, ImgTopicAboutMeUncheckedCreateInput>
    /**
     * In case the ImgTopicAboutMe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImgTopicAboutMeUpdateInput, ImgTopicAboutMeUncheckedUpdateInput>
  }

  /**
   * ImgTopicAboutMe delete
   */
  export type ImgTopicAboutMeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
    /**
     * Filter which ImgTopicAboutMe to delete.
     */
    where: ImgTopicAboutMeWhereUniqueInput
  }

  /**
   * ImgTopicAboutMe deleteMany
   */
  export type ImgTopicAboutMeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgTopicAboutMes to delete
     */
    where?: ImgTopicAboutMeWhereInput
    /**
     * Limit how many ImgTopicAboutMes to delete.
     */
    limit?: number
  }

  /**
   * ImgTopicAboutMe.topicAboutMe
   */
  export type ImgTopicAboutMe$topicAboutMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicAboutMe
     */
    select?: TopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicAboutMe
     */
    omit?: TopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicAboutMeInclude<ExtArgs> | null
    where?: TopicAboutMeWhereInput
  }

  /**
   * ImgTopicAboutMe without action
   */
  export type ImgTopicAboutMeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicAboutMe
     */
    select?: ImgTopicAboutMeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicAboutMe
     */
    omit?: ImgTopicAboutMeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicAboutMeInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    countryName: string | null
    placeName: string | null
    zone: string | null
    date: Date | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    userId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    countryName: string | null
    placeName: string | null
    zone: string | null
    date: Date | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    userId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    countryName: number
    placeName: number
    zone: number
    date: number
    isDelete: number
    createdAt: number
    updatedAd: number
    userId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    countryName?: true
    placeName?: true
    zone?: true
    date?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    countryName?: true
    placeName?: true
    zone?: true
    date?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    countryName?: true
    placeName?: true
    zone?: true
    date?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    countryName: string
    placeName: string
    zone: string | null
    date: Date | null
    isDelete: boolean
    createdAt: Date
    updatedAd: Date
    userId: string | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryName?: boolean
    placeName?: boolean
    zone?: boolean
    date?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    userId?: boolean
    user?: boolean | Post$userArgs<ExtArgs>
    imgPost?: boolean | Post$imgPostArgs<ExtArgs>
    topicPost?: boolean | Post$topicPostArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    countryName?: boolean
    placeName?: boolean
    zone?: boolean
    date?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    userId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryName" | "placeName" | "zone" | "date" | "isDelete" | "createdAt" | "updatedAd" | "userId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Post$userArgs<ExtArgs>
    imgPost?: boolean | Post$imgPostArgs<ExtArgs>
    topicPost?: boolean | Post$topicPostArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      imgPost: Prisma.$ImgPostPayload<ExtArgs>[]
      topicPost: Prisma.$TopicPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryName: string
      placeName: string
      zone: string | null
      date: Date | null
      isDelete: boolean
      createdAt: Date
      updatedAd: Date
      userId: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Post$userArgs<ExtArgs> = {}>(args?: Subset<T, Post$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    imgPost<T extends Post$imgPostArgs<ExtArgs> = {}>(args?: Subset<T, Post$imgPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topicPost<T extends Post$topicPostArgs<ExtArgs> = {}>(args?: Subset<T, Post$topicPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly countryName: FieldRef<"Post", 'String'>
    readonly placeName: FieldRef<"Post", 'String'>
    readonly zone: FieldRef<"Post", 'String'>
    readonly date: FieldRef<"Post", 'DateTime'>
    readonly isDelete: FieldRef<"Post", 'Boolean'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAd: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.user
   */
  export type Post$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Post.imgPost
   */
  export type Post$imgPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    where?: ImgPostWhereInput
    orderBy?: ImgPostOrderByWithRelationInput | ImgPostOrderByWithRelationInput[]
    cursor?: ImgPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImgPostScalarFieldEnum | ImgPostScalarFieldEnum[]
  }

  /**
   * Post.topicPost
   */
  export type Post$topicPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    where?: TopicPostWhereInput
    orderBy?: TopicPostOrderByWithRelationInput | TopicPostOrderByWithRelationInput[]
    cursor?: TopicPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicPostScalarFieldEnum | TopicPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model ImgPost
   */

  export type AggregateImgPost = {
    _count: ImgPostCountAggregateOutputType | null
    _min: ImgPostMinAggregateOutputType | null
    _max: ImgPostMaxAggregateOutputType | null
  }

  export type ImgPostMinAggregateOutputType = {
    id: string | null
    imgUrl: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAd: Date | null
    postId: string | null
  }

  export type ImgPostMaxAggregateOutputType = {
    id: string | null
    imgUrl: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAd: Date | null
    postId: string | null
  }

  export type ImgPostCountAggregateOutputType = {
    id: number
    imgUrl: number
    filePath: number
    createdAt: number
    updatedAd: number
    postId: number
    _all: number
  }


  export type ImgPostMinAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    createdAt?: true
    updatedAd?: true
    postId?: true
  }

  export type ImgPostMaxAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    createdAt?: true
    updatedAd?: true
    postId?: true
  }

  export type ImgPostCountAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    createdAt?: true
    updatedAd?: true
    postId?: true
    _all?: true
  }

  export type ImgPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgPost to aggregate.
     */
    where?: ImgPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgPosts to fetch.
     */
    orderBy?: ImgPostOrderByWithRelationInput | ImgPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImgPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImgPosts
    **/
    _count?: true | ImgPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImgPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImgPostMaxAggregateInputType
  }

  export type GetImgPostAggregateType<T extends ImgPostAggregateArgs> = {
        [P in keyof T & keyof AggregateImgPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImgPost[P]>
      : GetScalarType<T[P], AggregateImgPost[P]>
  }




  export type ImgPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgPostWhereInput
    orderBy?: ImgPostOrderByWithAggregationInput | ImgPostOrderByWithAggregationInput[]
    by: ImgPostScalarFieldEnum[] | ImgPostScalarFieldEnum
    having?: ImgPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImgPostCountAggregateInputType | true
    _min?: ImgPostMinAggregateInputType
    _max?: ImgPostMaxAggregateInputType
  }

  export type ImgPostGroupByOutputType = {
    id: string
    imgUrl: string
    filePath: string | null
    createdAt: Date
    updatedAd: Date
    postId: string | null
    _count: ImgPostCountAggregateOutputType | null
    _min: ImgPostMinAggregateOutputType | null
    _max: ImgPostMaxAggregateOutputType | null
  }

  type GetImgPostGroupByPayload<T extends ImgPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImgPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImgPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImgPostGroupByOutputType[P]>
            : GetScalarType<T[P], ImgPostGroupByOutputType[P]>
        }
      >
    >


  export type ImgPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imgUrl?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    postId?: boolean
    post?: boolean | ImgPost$postArgs<ExtArgs>
  }, ExtArgs["result"]["imgPost"]>



  export type ImgPostSelectScalar = {
    id?: boolean
    imgUrl?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    postId?: boolean
  }

  export type ImgPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imgUrl" | "filePath" | "createdAt" | "updatedAd" | "postId", ExtArgs["result"]["imgPost"]>
  export type ImgPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | ImgPost$postArgs<ExtArgs>
  }

  export type $ImgPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImgPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imgUrl: string
      filePath: string | null
      createdAt: Date
      updatedAd: Date
      postId: string | null
    }, ExtArgs["result"]["imgPost"]>
    composites: {}
  }

  type ImgPostGetPayload<S extends boolean | null | undefined | ImgPostDefaultArgs> = $Result.GetResult<Prisma.$ImgPostPayload, S>

  type ImgPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImgPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImgPostCountAggregateInputType | true
    }

  export interface ImgPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImgPost'], meta: { name: 'ImgPost' } }
    /**
     * Find zero or one ImgPost that matches the filter.
     * @param {ImgPostFindUniqueArgs} args - Arguments to find a ImgPost
     * @example
     * // Get one ImgPost
     * const imgPost = await prisma.imgPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImgPostFindUniqueArgs>(args: SelectSubset<T, ImgPostFindUniqueArgs<ExtArgs>>): Prisma__ImgPostClient<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImgPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImgPostFindUniqueOrThrowArgs} args - Arguments to find a ImgPost
     * @example
     * // Get one ImgPost
     * const imgPost = await prisma.imgPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImgPostFindUniqueOrThrowArgs>(args: SelectSubset<T, ImgPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImgPostClient<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgPostFindFirstArgs} args - Arguments to find a ImgPost
     * @example
     * // Get one ImgPost
     * const imgPost = await prisma.imgPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImgPostFindFirstArgs>(args?: SelectSubset<T, ImgPostFindFirstArgs<ExtArgs>>): Prisma__ImgPostClient<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgPostFindFirstOrThrowArgs} args - Arguments to find a ImgPost
     * @example
     * // Get one ImgPost
     * const imgPost = await prisma.imgPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImgPostFindFirstOrThrowArgs>(args?: SelectSubset<T, ImgPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImgPostClient<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImgPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImgPosts
     * const imgPosts = await prisma.imgPost.findMany()
     * 
     * // Get first 10 ImgPosts
     * const imgPosts = await prisma.imgPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imgPostWithIdOnly = await prisma.imgPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImgPostFindManyArgs>(args?: SelectSubset<T, ImgPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImgPost.
     * @param {ImgPostCreateArgs} args - Arguments to create a ImgPost.
     * @example
     * // Create one ImgPost
     * const ImgPost = await prisma.imgPost.create({
     *   data: {
     *     // ... data to create a ImgPost
     *   }
     * })
     * 
     */
    create<T extends ImgPostCreateArgs>(args: SelectSubset<T, ImgPostCreateArgs<ExtArgs>>): Prisma__ImgPostClient<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImgPosts.
     * @param {ImgPostCreateManyArgs} args - Arguments to create many ImgPosts.
     * @example
     * // Create many ImgPosts
     * const imgPost = await prisma.imgPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImgPostCreateManyArgs>(args?: SelectSubset<T, ImgPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImgPost.
     * @param {ImgPostDeleteArgs} args - Arguments to delete one ImgPost.
     * @example
     * // Delete one ImgPost
     * const ImgPost = await prisma.imgPost.delete({
     *   where: {
     *     // ... filter to delete one ImgPost
     *   }
     * })
     * 
     */
    delete<T extends ImgPostDeleteArgs>(args: SelectSubset<T, ImgPostDeleteArgs<ExtArgs>>): Prisma__ImgPostClient<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImgPost.
     * @param {ImgPostUpdateArgs} args - Arguments to update one ImgPost.
     * @example
     * // Update one ImgPost
     * const imgPost = await prisma.imgPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImgPostUpdateArgs>(args: SelectSubset<T, ImgPostUpdateArgs<ExtArgs>>): Prisma__ImgPostClient<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImgPosts.
     * @param {ImgPostDeleteManyArgs} args - Arguments to filter ImgPosts to delete.
     * @example
     * // Delete a few ImgPosts
     * const { count } = await prisma.imgPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImgPostDeleteManyArgs>(args?: SelectSubset<T, ImgPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImgPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImgPosts
     * const imgPost = await prisma.imgPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImgPostUpdateManyArgs>(args: SelectSubset<T, ImgPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImgPost.
     * @param {ImgPostUpsertArgs} args - Arguments to update or create a ImgPost.
     * @example
     * // Update or create a ImgPost
     * const imgPost = await prisma.imgPost.upsert({
     *   create: {
     *     // ... data to create a ImgPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImgPost we want to update
     *   }
     * })
     */
    upsert<T extends ImgPostUpsertArgs>(args: SelectSubset<T, ImgPostUpsertArgs<ExtArgs>>): Prisma__ImgPostClient<$Result.GetResult<Prisma.$ImgPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImgPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgPostCountArgs} args - Arguments to filter ImgPosts to count.
     * @example
     * // Count the number of ImgPosts
     * const count = await prisma.imgPost.count({
     *   where: {
     *     // ... the filter for the ImgPosts we want to count
     *   }
     * })
    **/
    count<T extends ImgPostCountArgs>(
      args?: Subset<T, ImgPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImgPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImgPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImgPostAggregateArgs>(args: Subset<T, ImgPostAggregateArgs>): Prisma.PrismaPromise<GetImgPostAggregateType<T>>

    /**
     * Group by ImgPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImgPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImgPostGroupByArgs['orderBy'] }
        : { orderBy?: ImgPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImgPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImgPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImgPost model
   */
  readonly fields: ImgPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImgPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImgPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends ImgPost$postArgs<ExtArgs> = {}>(args?: Subset<T, ImgPost$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImgPost model
   */
  interface ImgPostFieldRefs {
    readonly id: FieldRef<"ImgPost", 'String'>
    readonly imgUrl: FieldRef<"ImgPost", 'String'>
    readonly filePath: FieldRef<"ImgPost", 'String'>
    readonly createdAt: FieldRef<"ImgPost", 'DateTime'>
    readonly updatedAd: FieldRef<"ImgPost", 'DateTime'>
    readonly postId: FieldRef<"ImgPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImgPost findUnique
   */
  export type ImgPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgPost to fetch.
     */
    where: ImgPostWhereUniqueInput
  }

  /**
   * ImgPost findUniqueOrThrow
   */
  export type ImgPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgPost to fetch.
     */
    where: ImgPostWhereUniqueInput
  }

  /**
   * ImgPost findFirst
   */
  export type ImgPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgPost to fetch.
     */
    where?: ImgPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgPosts to fetch.
     */
    orderBy?: ImgPostOrderByWithRelationInput | ImgPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgPosts.
     */
    cursor?: ImgPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgPosts.
     */
    distinct?: ImgPostScalarFieldEnum | ImgPostScalarFieldEnum[]
  }

  /**
   * ImgPost findFirstOrThrow
   */
  export type ImgPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgPost to fetch.
     */
    where?: ImgPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgPosts to fetch.
     */
    orderBy?: ImgPostOrderByWithRelationInput | ImgPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgPosts.
     */
    cursor?: ImgPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgPosts.
     */
    distinct?: ImgPostScalarFieldEnum | ImgPostScalarFieldEnum[]
  }

  /**
   * ImgPost findMany
   */
  export type ImgPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgPosts to fetch.
     */
    where?: ImgPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgPosts to fetch.
     */
    orderBy?: ImgPostOrderByWithRelationInput | ImgPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImgPosts.
     */
    cursor?: ImgPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgPosts.
     */
    skip?: number
    distinct?: ImgPostScalarFieldEnum | ImgPostScalarFieldEnum[]
  }

  /**
   * ImgPost create
   */
  export type ImgPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * The data needed to create a ImgPost.
     */
    data: XOR<ImgPostCreateInput, ImgPostUncheckedCreateInput>
  }

  /**
   * ImgPost createMany
   */
  export type ImgPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImgPosts.
     */
    data: ImgPostCreateManyInput | ImgPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImgPost update
   */
  export type ImgPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * The data needed to update a ImgPost.
     */
    data: XOR<ImgPostUpdateInput, ImgPostUncheckedUpdateInput>
    /**
     * Choose, which ImgPost to update.
     */
    where: ImgPostWhereUniqueInput
  }

  /**
   * ImgPost updateMany
   */
  export type ImgPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImgPosts.
     */
    data: XOR<ImgPostUpdateManyMutationInput, ImgPostUncheckedUpdateManyInput>
    /**
     * Filter which ImgPosts to update
     */
    where?: ImgPostWhereInput
    /**
     * Limit how many ImgPosts to update.
     */
    limit?: number
  }

  /**
   * ImgPost upsert
   */
  export type ImgPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * The filter to search for the ImgPost to update in case it exists.
     */
    where: ImgPostWhereUniqueInput
    /**
     * In case the ImgPost found by the `where` argument doesn't exist, create a new ImgPost with this data.
     */
    create: XOR<ImgPostCreateInput, ImgPostUncheckedCreateInput>
    /**
     * In case the ImgPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImgPostUpdateInput, ImgPostUncheckedUpdateInput>
  }

  /**
   * ImgPost delete
   */
  export type ImgPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
    /**
     * Filter which ImgPost to delete.
     */
    where: ImgPostWhereUniqueInput
  }

  /**
   * ImgPost deleteMany
   */
  export type ImgPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgPosts to delete
     */
    where?: ImgPostWhereInput
    /**
     * Limit how many ImgPosts to delete.
     */
    limit?: number
  }

  /**
   * ImgPost.post
   */
  export type ImgPost$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * ImgPost without action
   */
  export type ImgPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgPost
     */
    select?: ImgPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgPost
     */
    omit?: ImgPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgPostInclude<ExtArgs> | null
  }


  /**
   * Model TopicPost
   */

  export type AggregateTopicPost = {
    _count: TopicPostCountAggregateOutputType | null
    _min: TopicPostMinAggregateOutputType | null
    _max: TopicPostMaxAggregateOutputType | null
  }

  export type TopicPostMinAggregateOutputType = {
    id: string | null
    nameTopic: string | null
    detail: string | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    postId: string | null
  }

  export type TopicPostMaxAggregateOutputType = {
    id: string | null
    nameTopic: string | null
    detail: string | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAd: Date | null
    postId: string | null
  }

  export type TopicPostCountAggregateOutputType = {
    id: number
    nameTopic: number
    detail: number
    isDelete: number
    createdAt: number
    updatedAd: number
    postId: number
    _all: number
  }


  export type TopicPostMinAggregateInputType = {
    id?: true
    nameTopic?: true
    detail?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    postId?: true
  }

  export type TopicPostMaxAggregateInputType = {
    id?: true
    nameTopic?: true
    detail?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    postId?: true
  }

  export type TopicPostCountAggregateInputType = {
    id?: true
    nameTopic?: true
    detail?: true
    isDelete?: true
    createdAt?: true
    updatedAd?: true
    postId?: true
    _all?: true
  }

  export type TopicPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicPost to aggregate.
     */
    where?: TopicPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicPosts to fetch.
     */
    orderBy?: TopicPostOrderByWithRelationInput | TopicPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopicPosts
    **/
    _count?: true | TopicPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicPostMaxAggregateInputType
  }

  export type GetTopicPostAggregateType<T extends TopicPostAggregateArgs> = {
        [P in keyof T & keyof AggregateTopicPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopicPost[P]>
      : GetScalarType<T[P], AggregateTopicPost[P]>
  }




  export type TopicPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicPostWhereInput
    orderBy?: TopicPostOrderByWithAggregationInput | TopicPostOrderByWithAggregationInput[]
    by: TopicPostScalarFieldEnum[] | TopicPostScalarFieldEnum
    having?: TopicPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicPostCountAggregateInputType | true
    _min?: TopicPostMinAggregateInputType
    _max?: TopicPostMaxAggregateInputType
  }

  export type TopicPostGroupByOutputType = {
    id: string
    nameTopic: string
    detail: string
    isDelete: boolean
    createdAt: Date
    updatedAd: Date
    postId: string | null
    _count: TopicPostCountAggregateOutputType | null
    _min: TopicPostMinAggregateOutputType | null
    _max: TopicPostMaxAggregateOutputType | null
  }

  type GetTopicPostGroupByPayload<T extends TopicPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicPostGroupByOutputType[P]>
            : GetScalarType<T[P], TopicPostGroupByOutputType[P]>
        }
      >
    >


  export type TopicPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameTopic?: boolean
    detail?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    postId?: boolean
    post?: boolean | TopicPost$postArgs<ExtArgs>
    imgTopicPost?: boolean | TopicPost$imgTopicPostArgs<ExtArgs>
    _count?: boolean | TopicPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicPost"]>



  export type TopicPostSelectScalar = {
    id?: boolean
    nameTopic?: boolean
    detail?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    postId?: boolean
  }

  export type TopicPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameTopic" | "detail" | "isDelete" | "createdAt" | "updatedAd" | "postId", ExtArgs["result"]["topicPost"]>
  export type TopicPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | TopicPost$postArgs<ExtArgs>
    imgTopicPost?: boolean | TopicPost$imgTopicPostArgs<ExtArgs>
    _count?: boolean | TopicPostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TopicPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopicPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs> | null
      imgTopicPost: Prisma.$ImgTopicPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameTopic: string
      detail: string
      isDelete: boolean
      createdAt: Date
      updatedAd: Date
      postId: string | null
    }, ExtArgs["result"]["topicPost"]>
    composites: {}
  }

  type TopicPostGetPayload<S extends boolean | null | undefined | TopicPostDefaultArgs> = $Result.GetResult<Prisma.$TopicPostPayload, S>

  type TopicPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicPostCountAggregateInputType | true
    }

  export interface TopicPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopicPost'], meta: { name: 'TopicPost' } }
    /**
     * Find zero or one TopicPost that matches the filter.
     * @param {TopicPostFindUniqueArgs} args - Arguments to find a TopicPost
     * @example
     * // Get one TopicPost
     * const topicPost = await prisma.topicPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicPostFindUniqueArgs>(args: SelectSubset<T, TopicPostFindUniqueArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopicPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicPostFindUniqueOrThrowArgs} args - Arguments to find a TopicPost
     * @example
     * // Get one TopicPost
     * const topicPost = await prisma.topicPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicPostFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicPostFindFirstArgs} args - Arguments to find a TopicPost
     * @example
     * // Get one TopicPost
     * const topicPost = await prisma.topicPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicPostFindFirstArgs>(args?: SelectSubset<T, TopicPostFindFirstArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicPostFindFirstOrThrowArgs} args - Arguments to find a TopicPost
     * @example
     * // Get one TopicPost
     * const topicPost = await prisma.topicPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicPostFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopicPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopicPosts
     * const topicPosts = await prisma.topicPost.findMany()
     * 
     * // Get first 10 TopicPosts
     * const topicPosts = await prisma.topicPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicPostWithIdOnly = await prisma.topicPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicPostFindManyArgs>(args?: SelectSubset<T, TopicPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopicPost.
     * @param {TopicPostCreateArgs} args - Arguments to create a TopicPost.
     * @example
     * // Create one TopicPost
     * const TopicPost = await prisma.topicPost.create({
     *   data: {
     *     // ... data to create a TopicPost
     *   }
     * })
     * 
     */
    create<T extends TopicPostCreateArgs>(args: SelectSubset<T, TopicPostCreateArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopicPosts.
     * @param {TopicPostCreateManyArgs} args - Arguments to create many TopicPosts.
     * @example
     * // Create many TopicPosts
     * const topicPost = await prisma.topicPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicPostCreateManyArgs>(args?: SelectSubset<T, TopicPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TopicPost.
     * @param {TopicPostDeleteArgs} args - Arguments to delete one TopicPost.
     * @example
     * // Delete one TopicPost
     * const TopicPost = await prisma.topicPost.delete({
     *   where: {
     *     // ... filter to delete one TopicPost
     *   }
     * })
     * 
     */
    delete<T extends TopicPostDeleteArgs>(args: SelectSubset<T, TopicPostDeleteArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopicPost.
     * @param {TopicPostUpdateArgs} args - Arguments to update one TopicPost.
     * @example
     * // Update one TopicPost
     * const topicPost = await prisma.topicPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicPostUpdateArgs>(args: SelectSubset<T, TopicPostUpdateArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopicPosts.
     * @param {TopicPostDeleteManyArgs} args - Arguments to filter TopicPosts to delete.
     * @example
     * // Delete a few TopicPosts
     * const { count } = await prisma.topicPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicPostDeleteManyArgs>(args?: SelectSubset<T, TopicPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopicPosts
     * const topicPost = await prisma.topicPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicPostUpdateManyArgs>(args: SelectSubset<T, TopicPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TopicPost.
     * @param {TopicPostUpsertArgs} args - Arguments to update or create a TopicPost.
     * @example
     * // Update or create a TopicPost
     * const topicPost = await prisma.topicPost.upsert({
     *   create: {
     *     // ... data to create a TopicPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopicPost we want to update
     *   }
     * })
     */
    upsert<T extends TopicPostUpsertArgs>(args: SelectSubset<T, TopicPostUpsertArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopicPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicPostCountArgs} args - Arguments to filter TopicPosts to count.
     * @example
     * // Count the number of TopicPosts
     * const count = await prisma.topicPost.count({
     *   where: {
     *     // ... the filter for the TopicPosts we want to count
     *   }
     * })
    **/
    count<T extends TopicPostCountArgs>(
      args?: Subset<T, TopicPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopicPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicPostAggregateArgs>(args: Subset<T, TopicPostAggregateArgs>): Prisma.PrismaPromise<GetTopicPostAggregateType<T>>

    /**
     * Group by TopicPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicPostGroupByArgs['orderBy'] }
        : { orderBy?: TopicPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopicPost model
   */
  readonly fields: TopicPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopicPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends TopicPost$postArgs<ExtArgs> = {}>(args?: Subset<T, TopicPost$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    imgTopicPost<T extends TopicPost$imgTopicPostArgs<ExtArgs> = {}>(args?: Subset<T, TopicPost$imgTopicPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopicPost model
   */
  interface TopicPostFieldRefs {
    readonly id: FieldRef<"TopicPost", 'String'>
    readonly nameTopic: FieldRef<"TopicPost", 'String'>
    readonly detail: FieldRef<"TopicPost", 'String'>
    readonly isDelete: FieldRef<"TopicPost", 'Boolean'>
    readonly createdAt: FieldRef<"TopicPost", 'DateTime'>
    readonly updatedAd: FieldRef<"TopicPost", 'DateTime'>
    readonly postId: FieldRef<"TopicPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TopicPost findUnique
   */
  export type TopicPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * Filter, which TopicPost to fetch.
     */
    where: TopicPostWhereUniqueInput
  }

  /**
   * TopicPost findUniqueOrThrow
   */
  export type TopicPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * Filter, which TopicPost to fetch.
     */
    where: TopicPostWhereUniqueInput
  }

  /**
   * TopicPost findFirst
   */
  export type TopicPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * Filter, which TopicPost to fetch.
     */
    where?: TopicPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicPosts to fetch.
     */
    orderBy?: TopicPostOrderByWithRelationInput | TopicPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicPosts.
     */
    cursor?: TopicPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicPosts.
     */
    distinct?: TopicPostScalarFieldEnum | TopicPostScalarFieldEnum[]
  }

  /**
   * TopicPost findFirstOrThrow
   */
  export type TopicPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * Filter, which TopicPost to fetch.
     */
    where?: TopicPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicPosts to fetch.
     */
    orderBy?: TopicPostOrderByWithRelationInput | TopicPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicPosts.
     */
    cursor?: TopicPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicPosts.
     */
    distinct?: TopicPostScalarFieldEnum | TopicPostScalarFieldEnum[]
  }

  /**
   * TopicPost findMany
   */
  export type TopicPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * Filter, which TopicPosts to fetch.
     */
    where?: TopicPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicPosts to fetch.
     */
    orderBy?: TopicPostOrderByWithRelationInput | TopicPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopicPosts.
     */
    cursor?: TopicPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicPosts.
     */
    skip?: number
    distinct?: TopicPostScalarFieldEnum | TopicPostScalarFieldEnum[]
  }

  /**
   * TopicPost create
   */
  export type TopicPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * The data needed to create a TopicPost.
     */
    data: XOR<TopicPostCreateInput, TopicPostUncheckedCreateInput>
  }

  /**
   * TopicPost createMany
   */
  export type TopicPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopicPosts.
     */
    data: TopicPostCreateManyInput | TopicPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopicPost update
   */
  export type TopicPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * The data needed to update a TopicPost.
     */
    data: XOR<TopicPostUpdateInput, TopicPostUncheckedUpdateInput>
    /**
     * Choose, which TopicPost to update.
     */
    where: TopicPostWhereUniqueInput
  }

  /**
   * TopicPost updateMany
   */
  export type TopicPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopicPosts.
     */
    data: XOR<TopicPostUpdateManyMutationInput, TopicPostUncheckedUpdateManyInput>
    /**
     * Filter which TopicPosts to update
     */
    where?: TopicPostWhereInput
    /**
     * Limit how many TopicPosts to update.
     */
    limit?: number
  }

  /**
   * TopicPost upsert
   */
  export type TopicPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * The filter to search for the TopicPost to update in case it exists.
     */
    where: TopicPostWhereUniqueInput
    /**
     * In case the TopicPost found by the `where` argument doesn't exist, create a new TopicPost with this data.
     */
    create: XOR<TopicPostCreateInput, TopicPostUncheckedCreateInput>
    /**
     * In case the TopicPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicPostUpdateInput, TopicPostUncheckedUpdateInput>
  }

  /**
   * TopicPost delete
   */
  export type TopicPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    /**
     * Filter which TopicPost to delete.
     */
    where: TopicPostWhereUniqueInput
  }

  /**
   * TopicPost deleteMany
   */
  export type TopicPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicPosts to delete
     */
    where?: TopicPostWhereInput
    /**
     * Limit how many TopicPosts to delete.
     */
    limit?: number
  }

  /**
   * TopicPost.post
   */
  export type TopicPost$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * TopicPost.imgTopicPost
   */
  export type TopicPost$imgTopicPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    where?: ImgTopicPostWhereInput
    orderBy?: ImgTopicPostOrderByWithRelationInput | ImgTopicPostOrderByWithRelationInput[]
    cursor?: ImgTopicPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImgTopicPostScalarFieldEnum | ImgTopicPostScalarFieldEnum[]
  }

  /**
   * TopicPost without action
   */
  export type TopicPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
  }


  /**
   * Model ImgTopicPost
   */

  export type AggregateImgTopicPost = {
    _count: ImgTopicPostCountAggregateOutputType | null
    _min: ImgTopicPostMinAggregateOutputType | null
    _max: ImgTopicPostMaxAggregateOutputType | null
  }

  export type ImgTopicPostMinAggregateOutputType = {
    id: string | null
    imgUrl: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAd: Date | null
    topicPostId: string | null
  }

  export type ImgTopicPostMaxAggregateOutputType = {
    id: string | null
    imgUrl: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAd: Date | null
    topicPostId: string | null
  }

  export type ImgTopicPostCountAggregateOutputType = {
    id: number
    imgUrl: number
    filePath: number
    createdAt: number
    updatedAd: number
    topicPostId: number
    _all: number
  }


  export type ImgTopicPostMinAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    createdAt?: true
    updatedAd?: true
    topicPostId?: true
  }

  export type ImgTopicPostMaxAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    createdAt?: true
    updatedAd?: true
    topicPostId?: true
  }

  export type ImgTopicPostCountAggregateInputType = {
    id?: true
    imgUrl?: true
    filePath?: true
    createdAt?: true
    updatedAd?: true
    topicPostId?: true
    _all?: true
  }

  export type ImgTopicPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgTopicPost to aggregate.
     */
    where?: ImgTopicPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgTopicPosts to fetch.
     */
    orderBy?: ImgTopicPostOrderByWithRelationInput | ImgTopicPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImgTopicPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgTopicPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgTopicPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImgTopicPosts
    **/
    _count?: true | ImgTopicPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImgTopicPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImgTopicPostMaxAggregateInputType
  }

  export type GetImgTopicPostAggregateType<T extends ImgTopicPostAggregateArgs> = {
        [P in keyof T & keyof AggregateImgTopicPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImgTopicPost[P]>
      : GetScalarType<T[P], AggregateImgTopicPost[P]>
  }




  export type ImgTopicPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgTopicPostWhereInput
    orderBy?: ImgTopicPostOrderByWithAggregationInput | ImgTopicPostOrderByWithAggregationInput[]
    by: ImgTopicPostScalarFieldEnum[] | ImgTopicPostScalarFieldEnum
    having?: ImgTopicPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImgTopicPostCountAggregateInputType | true
    _min?: ImgTopicPostMinAggregateInputType
    _max?: ImgTopicPostMaxAggregateInputType
  }

  export type ImgTopicPostGroupByOutputType = {
    id: string
    imgUrl: string
    filePath: string | null
    createdAt: Date
    updatedAd: Date
    topicPostId: string | null
    _count: ImgTopicPostCountAggregateOutputType | null
    _min: ImgTopicPostMinAggregateOutputType | null
    _max: ImgTopicPostMaxAggregateOutputType | null
  }

  type GetImgTopicPostGroupByPayload<T extends ImgTopicPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImgTopicPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImgTopicPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImgTopicPostGroupByOutputType[P]>
            : GetScalarType<T[P], ImgTopicPostGroupByOutputType[P]>
        }
      >
    >


  export type ImgTopicPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imgUrl?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    topicPostId?: boolean
    topicPost?: boolean | ImgTopicPost$topicPostArgs<ExtArgs>
  }, ExtArgs["result"]["imgTopicPost"]>



  export type ImgTopicPostSelectScalar = {
    id?: boolean
    imgUrl?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAd?: boolean
    topicPostId?: boolean
  }

  export type ImgTopicPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imgUrl" | "filePath" | "createdAt" | "updatedAd" | "topicPostId", ExtArgs["result"]["imgTopicPost"]>
  export type ImgTopicPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicPost?: boolean | ImgTopicPost$topicPostArgs<ExtArgs>
  }

  export type $ImgTopicPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImgTopicPost"
    objects: {
      topicPost: Prisma.$TopicPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imgUrl: string
      filePath: string | null
      createdAt: Date
      updatedAd: Date
      topicPostId: string | null
    }, ExtArgs["result"]["imgTopicPost"]>
    composites: {}
  }

  type ImgTopicPostGetPayload<S extends boolean | null | undefined | ImgTopicPostDefaultArgs> = $Result.GetResult<Prisma.$ImgTopicPostPayload, S>

  type ImgTopicPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImgTopicPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImgTopicPostCountAggregateInputType | true
    }

  export interface ImgTopicPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImgTopicPost'], meta: { name: 'ImgTopicPost' } }
    /**
     * Find zero or one ImgTopicPost that matches the filter.
     * @param {ImgTopicPostFindUniqueArgs} args - Arguments to find a ImgTopicPost
     * @example
     * // Get one ImgTopicPost
     * const imgTopicPost = await prisma.imgTopicPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImgTopicPostFindUniqueArgs>(args: SelectSubset<T, ImgTopicPostFindUniqueArgs<ExtArgs>>): Prisma__ImgTopicPostClient<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImgTopicPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImgTopicPostFindUniqueOrThrowArgs} args - Arguments to find a ImgTopicPost
     * @example
     * // Get one ImgTopicPost
     * const imgTopicPost = await prisma.imgTopicPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImgTopicPostFindUniqueOrThrowArgs>(args: SelectSubset<T, ImgTopicPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImgTopicPostClient<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgTopicPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicPostFindFirstArgs} args - Arguments to find a ImgTopicPost
     * @example
     * // Get one ImgTopicPost
     * const imgTopicPost = await prisma.imgTopicPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImgTopicPostFindFirstArgs>(args?: SelectSubset<T, ImgTopicPostFindFirstArgs<ExtArgs>>): Prisma__ImgTopicPostClient<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgTopicPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicPostFindFirstOrThrowArgs} args - Arguments to find a ImgTopicPost
     * @example
     * // Get one ImgTopicPost
     * const imgTopicPost = await prisma.imgTopicPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImgTopicPostFindFirstOrThrowArgs>(args?: SelectSubset<T, ImgTopicPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImgTopicPostClient<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImgTopicPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImgTopicPosts
     * const imgTopicPosts = await prisma.imgTopicPost.findMany()
     * 
     * // Get first 10 ImgTopicPosts
     * const imgTopicPosts = await prisma.imgTopicPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imgTopicPostWithIdOnly = await prisma.imgTopicPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImgTopicPostFindManyArgs>(args?: SelectSubset<T, ImgTopicPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImgTopicPost.
     * @param {ImgTopicPostCreateArgs} args - Arguments to create a ImgTopicPost.
     * @example
     * // Create one ImgTopicPost
     * const ImgTopicPost = await prisma.imgTopicPost.create({
     *   data: {
     *     // ... data to create a ImgTopicPost
     *   }
     * })
     * 
     */
    create<T extends ImgTopicPostCreateArgs>(args: SelectSubset<T, ImgTopicPostCreateArgs<ExtArgs>>): Prisma__ImgTopicPostClient<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImgTopicPosts.
     * @param {ImgTopicPostCreateManyArgs} args - Arguments to create many ImgTopicPosts.
     * @example
     * // Create many ImgTopicPosts
     * const imgTopicPost = await prisma.imgTopicPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImgTopicPostCreateManyArgs>(args?: SelectSubset<T, ImgTopicPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImgTopicPost.
     * @param {ImgTopicPostDeleteArgs} args - Arguments to delete one ImgTopicPost.
     * @example
     * // Delete one ImgTopicPost
     * const ImgTopicPost = await prisma.imgTopicPost.delete({
     *   where: {
     *     // ... filter to delete one ImgTopicPost
     *   }
     * })
     * 
     */
    delete<T extends ImgTopicPostDeleteArgs>(args: SelectSubset<T, ImgTopicPostDeleteArgs<ExtArgs>>): Prisma__ImgTopicPostClient<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImgTopicPost.
     * @param {ImgTopicPostUpdateArgs} args - Arguments to update one ImgTopicPost.
     * @example
     * // Update one ImgTopicPost
     * const imgTopicPost = await prisma.imgTopicPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImgTopicPostUpdateArgs>(args: SelectSubset<T, ImgTopicPostUpdateArgs<ExtArgs>>): Prisma__ImgTopicPostClient<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImgTopicPosts.
     * @param {ImgTopicPostDeleteManyArgs} args - Arguments to filter ImgTopicPosts to delete.
     * @example
     * // Delete a few ImgTopicPosts
     * const { count } = await prisma.imgTopicPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImgTopicPostDeleteManyArgs>(args?: SelectSubset<T, ImgTopicPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImgTopicPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImgTopicPosts
     * const imgTopicPost = await prisma.imgTopicPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImgTopicPostUpdateManyArgs>(args: SelectSubset<T, ImgTopicPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImgTopicPost.
     * @param {ImgTopicPostUpsertArgs} args - Arguments to update or create a ImgTopicPost.
     * @example
     * // Update or create a ImgTopicPost
     * const imgTopicPost = await prisma.imgTopicPost.upsert({
     *   create: {
     *     // ... data to create a ImgTopicPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImgTopicPost we want to update
     *   }
     * })
     */
    upsert<T extends ImgTopicPostUpsertArgs>(args: SelectSubset<T, ImgTopicPostUpsertArgs<ExtArgs>>): Prisma__ImgTopicPostClient<$Result.GetResult<Prisma.$ImgTopicPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImgTopicPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicPostCountArgs} args - Arguments to filter ImgTopicPosts to count.
     * @example
     * // Count the number of ImgTopicPosts
     * const count = await prisma.imgTopicPost.count({
     *   where: {
     *     // ... the filter for the ImgTopicPosts we want to count
     *   }
     * })
    **/
    count<T extends ImgTopicPostCountArgs>(
      args?: Subset<T, ImgTopicPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImgTopicPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImgTopicPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImgTopicPostAggregateArgs>(args: Subset<T, ImgTopicPostAggregateArgs>): Prisma.PrismaPromise<GetImgTopicPostAggregateType<T>>

    /**
     * Group by ImgTopicPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgTopicPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImgTopicPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImgTopicPostGroupByArgs['orderBy'] }
        : { orderBy?: ImgTopicPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImgTopicPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImgTopicPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImgTopicPost model
   */
  readonly fields: ImgTopicPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImgTopicPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImgTopicPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topicPost<T extends ImgTopicPost$topicPostArgs<ExtArgs> = {}>(args?: Subset<T, ImgTopicPost$topicPostArgs<ExtArgs>>): Prisma__TopicPostClient<$Result.GetResult<Prisma.$TopicPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImgTopicPost model
   */
  interface ImgTopicPostFieldRefs {
    readonly id: FieldRef<"ImgTopicPost", 'String'>
    readonly imgUrl: FieldRef<"ImgTopicPost", 'String'>
    readonly filePath: FieldRef<"ImgTopicPost", 'String'>
    readonly createdAt: FieldRef<"ImgTopicPost", 'DateTime'>
    readonly updatedAd: FieldRef<"ImgTopicPost", 'DateTime'>
    readonly topicPostId: FieldRef<"ImgTopicPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImgTopicPost findUnique
   */
  export type ImgTopicPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicPost to fetch.
     */
    where: ImgTopicPostWhereUniqueInput
  }

  /**
   * ImgTopicPost findUniqueOrThrow
   */
  export type ImgTopicPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicPost to fetch.
     */
    where: ImgTopicPostWhereUniqueInput
  }

  /**
   * ImgTopicPost findFirst
   */
  export type ImgTopicPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicPost to fetch.
     */
    where?: ImgTopicPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgTopicPosts to fetch.
     */
    orderBy?: ImgTopicPostOrderByWithRelationInput | ImgTopicPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgTopicPosts.
     */
    cursor?: ImgTopicPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgTopicPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgTopicPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgTopicPosts.
     */
    distinct?: ImgTopicPostScalarFieldEnum | ImgTopicPostScalarFieldEnum[]
  }

  /**
   * ImgTopicPost findFirstOrThrow
   */
  export type ImgTopicPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicPost to fetch.
     */
    where?: ImgTopicPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgTopicPosts to fetch.
     */
    orderBy?: ImgTopicPostOrderByWithRelationInput | ImgTopicPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgTopicPosts.
     */
    cursor?: ImgTopicPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgTopicPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgTopicPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgTopicPosts.
     */
    distinct?: ImgTopicPostScalarFieldEnum | ImgTopicPostScalarFieldEnum[]
  }

  /**
   * ImgTopicPost findMany
   */
  export type ImgTopicPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * Filter, which ImgTopicPosts to fetch.
     */
    where?: ImgTopicPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgTopicPosts to fetch.
     */
    orderBy?: ImgTopicPostOrderByWithRelationInput | ImgTopicPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImgTopicPosts.
     */
    cursor?: ImgTopicPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgTopicPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgTopicPosts.
     */
    skip?: number
    distinct?: ImgTopicPostScalarFieldEnum | ImgTopicPostScalarFieldEnum[]
  }

  /**
   * ImgTopicPost create
   */
  export type ImgTopicPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * The data needed to create a ImgTopicPost.
     */
    data: XOR<ImgTopicPostCreateInput, ImgTopicPostUncheckedCreateInput>
  }

  /**
   * ImgTopicPost createMany
   */
  export type ImgTopicPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImgTopicPosts.
     */
    data: ImgTopicPostCreateManyInput | ImgTopicPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImgTopicPost update
   */
  export type ImgTopicPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * The data needed to update a ImgTopicPost.
     */
    data: XOR<ImgTopicPostUpdateInput, ImgTopicPostUncheckedUpdateInput>
    /**
     * Choose, which ImgTopicPost to update.
     */
    where: ImgTopicPostWhereUniqueInput
  }

  /**
   * ImgTopicPost updateMany
   */
  export type ImgTopicPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImgTopicPosts.
     */
    data: XOR<ImgTopicPostUpdateManyMutationInput, ImgTopicPostUncheckedUpdateManyInput>
    /**
     * Filter which ImgTopicPosts to update
     */
    where?: ImgTopicPostWhereInput
    /**
     * Limit how many ImgTopicPosts to update.
     */
    limit?: number
  }

  /**
   * ImgTopicPost upsert
   */
  export type ImgTopicPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * The filter to search for the ImgTopicPost to update in case it exists.
     */
    where: ImgTopicPostWhereUniqueInput
    /**
     * In case the ImgTopicPost found by the `where` argument doesn't exist, create a new ImgTopicPost with this data.
     */
    create: XOR<ImgTopicPostCreateInput, ImgTopicPostUncheckedCreateInput>
    /**
     * In case the ImgTopicPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImgTopicPostUpdateInput, ImgTopicPostUncheckedUpdateInput>
  }

  /**
   * ImgTopicPost delete
   */
  export type ImgTopicPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
    /**
     * Filter which ImgTopicPost to delete.
     */
    where: ImgTopicPostWhereUniqueInput
  }

  /**
   * ImgTopicPost deleteMany
   */
  export type ImgTopicPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgTopicPosts to delete
     */
    where?: ImgTopicPostWhereInput
    /**
     * Limit how many ImgTopicPosts to delete.
     */
    limit?: number
  }

  /**
   * ImgTopicPost.topicPost
   */
  export type ImgTopicPost$topicPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicPost
     */
    select?: TopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicPost
     */
    omit?: TopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicPostInclude<ExtArgs> | null
    where?: TopicPostWhereInput
  }

  /**
   * ImgTopicPost without action
   */
  export type ImgTopicPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgTopicPost
     */
    select?: ImgTopicPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgTopicPost
     */
    omit?: ImgTopicPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgTopicPostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    imgUrl: 'imgUrl',
    filePath: 'filePath',
    password: 'password',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAd: 'updatedAd'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AboutMeScalarFieldEnum: {
    id: 'id',
    year: 'year',
    month: 'month',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAd: 'updatedAd',
    userId: 'userId'
  };

  export type AboutMeScalarFieldEnum = (typeof AboutMeScalarFieldEnum)[keyof typeof AboutMeScalarFieldEnum]


  export const TopicAboutMeScalarFieldEnum: {
    id: 'id',
    nameTopic: 'nameTopic',
    detail: 'detail',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAd: 'updatedAd',
    aboutMeId: 'aboutMeId'
  };

  export type TopicAboutMeScalarFieldEnum = (typeof TopicAboutMeScalarFieldEnum)[keyof typeof TopicAboutMeScalarFieldEnum]


  export const ImgTopicAboutMeScalarFieldEnum: {
    id: 'id',
    imgUrl: 'imgUrl',
    filePath: 'filePath',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAd: 'updatedAd',
    topicAboutMeId: 'topicAboutMeId'
  };

  export type ImgTopicAboutMeScalarFieldEnum = (typeof ImgTopicAboutMeScalarFieldEnum)[keyof typeof ImgTopicAboutMeScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    countryName: 'countryName',
    placeName: 'placeName',
    zone: 'zone',
    date: 'date',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAd: 'updatedAd',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ImgPostScalarFieldEnum: {
    id: 'id',
    imgUrl: 'imgUrl',
    filePath: 'filePath',
    createdAt: 'createdAt',
    updatedAd: 'updatedAd',
    postId: 'postId'
  };

  export type ImgPostScalarFieldEnum = (typeof ImgPostScalarFieldEnum)[keyof typeof ImgPostScalarFieldEnum]


  export const TopicPostScalarFieldEnum: {
    id: 'id',
    nameTopic: 'nameTopic',
    detail: 'detail',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAd: 'updatedAd',
    postId: 'postId'
  };

  export type TopicPostScalarFieldEnum = (typeof TopicPostScalarFieldEnum)[keyof typeof TopicPostScalarFieldEnum]


  export const ImgTopicPostScalarFieldEnum: {
    id: 'id',
    imgUrl: 'imgUrl',
    filePath: 'filePath',
    createdAt: 'createdAt',
    updatedAd: 'updatedAd',
    topicPostId: 'topicPostId'
  };

  export type ImgTopicPostScalarFieldEnum = (typeof ImgTopicPostScalarFieldEnum)[keyof typeof ImgTopicPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    imgUrl: 'imgUrl',
    filePath: 'filePath',
    password: 'password',
    refreshToken: 'refreshToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AboutMeOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AboutMeOrderByRelevanceFieldEnum = (typeof AboutMeOrderByRelevanceFieldEnum)[keyof typeof AboutMeOrderByRelevanceFieldEnum]


  export const TopicAboutMeOrderByRelevanceFieldEnum: {
    id: 'id',
    nameTopic: 'nameTopic',
    detail: 'detail',
    aboutMeId: 'aboutMeId'
  };

  export type TopicAboutMeOrderByRelevanceFieldEnum = (typeof TopicAboutMeOrderByRelevanceFieldEnum)[keyof typeof TopicAboutMeOrderByRelevanceFieldEnum]


  export const ImgTopicAboutMeOrderByRelevanceFieldEnum: {
    id: 'id',
    imgUrl: 'imgUrl',
    filePath: 'filePath',
    topicAboutMeId: 'topicAboutMeId'
  };

  export type ImgTopicAboutMeOrderByRelevanceFieldEnum = (typeof ImgTopicAboutMeOrderByRelevanceFieldEnum)[keyof typeof ImgTopicAboutMeOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    id: 'id',
    countryName: 'countryName',
    placeName: 'placeName',
    zone: 'zone',
    userId: 'userId'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const ImgPostOrderByRelevanceFieldEnum: {
    id: 'id',
    imgUrl: 'imgUrl',
    filePath: 'filePath',
    postId: 'postId'
  };

  export type ImgPostOrderByRelevanceFieldEnum = (typeof ImgPostOrderByRelevanceFieldEnum)[keyof typeof ImgPostOrderByRelevanceFieldEnum]


  export const TopicPostOrderByRelevanceFieldEnum: {
    id: 'id',
    nameTopic: 'nameTopic',
    detail: 'detail',
    postId: 'postId'
  };

  export type TopicPostOrderByRelevanceFieldEnum = (typeof TopicPostOrderByRelevanceFieldEnum)[keyof typeof TopicPostOrderByRelevanceFieldEnum]


  export const ImgTopicPostOrderByRelevanceFieldEnum: {
    id: 'id',
    imgUrl: 'imgUrl',
    filePath: 'filePath',
    topicPostId: 'topicPostId'
  };

  export type ImgTopicPostOrderByRelevanceFieldEnum = (typeof ImgTopicPostOrderByRelevanceFieldEnum)[keyof typeof ImgTopicPostOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    imgUrl?: StringNullableFilter<"User"> | string | null
    filePath?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAd?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    aboutMe?: AboutMeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    aboutMe?: AboutMeOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    imgUrl?: StringNullableFilter<"User"> | string | null
    filePath?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAd?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    aboutMe?: AboutMeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    imgUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAd?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AboutMeWhereInput = {
    AND?: AboutMeWhereInput | AboutMeWhereInput[]
    OR?: AboutMeWhereInput[]
    NOT?: AboutMeWhereInput | AboutMeWhereInput[]
    id?: StringFilter<"AboutMe"> | string
    year?: IntFilter<"AboutMe"> | number
    month?: IntFilter<"AboutMe"> | number
    isDelete?: BoolFilter<"AboutMe"> | boolean
    createdAt?: DateTimeFilter<"AboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"AboutMe"> | Date | string
    userId?: StringNullableFilter<"AboutMe"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    topicAboutMe?: TopicAboutMeListRelationFilter
  }

  export type AboutMeOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    topicAboutMe?: TopicAboutMeOrderByRelationAggregateInput
    _relevance?: AboutMeOrderByRelevanceInput
  }

  export type AboutMeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutMeWhereInput | AboutMeWhereInput[]
    OR?: AboutMeWhereInput[]
    NOT?: AboutMeWhereInput | AboutMeWhereInput[]
    year?: IntFilter<"AboutMe"> | number
    month?: IntFilter<"AboutMe"> | number
    isDelete?: BoolFilter<"AboutMe"> | boolean
    createdAt?: DateTimeFilter<"AboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"AboutMe"> | Date | string
    userId?: StringNullableFilter<"AboutMe"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    topicAboutMe?: TopicAboutMeListRelationFilter
  }, "id">

  export type AboutMeOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AboutMeCountOrderByAggregateInput
    _avg?: AboutMeAvgOrderByAggregateInput
    _max?: AboutMeMaxOrderByAggregateInput
    _min?: AboutMeMinOrderByAggregateInput
    _sum?: AboutMeSumOrderByAggregateInput
  }

  export type AboutMeScalarWhereWithAggregatesInput = {
    AND?: AboutMeScalarWhereWithAggregatesInput | AboutMeScalarWhereWithAggregatesInput[]
    OR?: AboutMeScalarWhereWithAggregatesInput[]
    NOT?: AboutMeScalarWhereWithAggregatesInput | AboutMeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutMe"> | string
    year?: IntWithAggregatesFilter<"AboutMe"> | number
    month?: IntWithAggregatesFilter<"AboutMe"> | number
    isDelete?: BoolWithAggregatesFilter<"AboutMe"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AboutMe"> | Date | string
    updatedAd?: DateTimeWithAggregatesFilter<"AboutMe"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"AboutMe"> | string | null
  }

  export type TopicAboutMeWhereInput = {
    AND?: TopicAboutMeWhereInput | TopicAboutMeWhereInput[]
    OR?: TopicAboutMeWhereInput[]
    NOT?: TopicAboutMeWhereInput | TopicAboutMeWhereInput[]
    id?: StringFilter<"TopicAboutMe"> | string
    nameTopic?: StringFilter<"TopicAboutMe"> | string
    detail?: StringFilter<"TopicAboutMe"> | string
    isDelete?: BoolFilter<"TopicAboutMe"> | boolean
    createdAt?: DateTimeFilter<"TopicAboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"TopicAboutMe"> | Date | string
    aboutMeId?: StringNullableFilter<"TopicAboutMe"> | string | null
    aboutMe?: XOR<AboutMeNullableScalarRelationFilter, AboutMeWhereInput> | null
    imgTopicAboutMe?: ImgTopicAboutMeListRelationFilter
  }

  export type TopicAboutMeOrderByWithRelationInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    aboutMeId?: SortOrderInput | SortOrder
    aboutMe?: AboutMeOrderByWithRelationInput
    imgTopicAboutMe?: ImgTopicAboutMeOrderByRelationAggregateInput
    _relevance?: TopicAboutMeOrderByRelevanceInput
  }

  export type TopicAboutMeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicAboutMeWhereInput | TopicAboutMeWhereInput[]
    OR?: TopicAboutMeWhereInput[]
    NOT?: TopicAboutMeWhereInput | TopicAboutMeWhereInput[]
    nameTopic?: StringFilter<"TopicAboutMe"> | string
    detail?: StringFilter<"TopicAboutMe"> | string
    isDelete?: BoolFilter<"TopicAboutMe"> | boolean
    createdAt?: DateTimeFilter<"TopicAboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"TopicAboutMe"> | Date | string
    aboutMeId?: StringNullableFilter<"TopicAboutMe"> | string | null
    aboutMe?: XOR<AboutMeNullableScalarRelationFilter, AboutMeWhereInput> | null
    imgTopicAboutMe?: ImgTopicAboutMeListRelationFilter
  }, "id">

  export type TopicAboutMeOrderByWithAggregationInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    aboutMeId?: SortOrderInput | SortOrder
    _count?: TopicAboutMeCountOrderByAggregateInput
    _max?: TopicAboutMeMaxOrderByAggregateInput
    _min?: TopicAboutMeMinOrderByAggregateInput
  }

  export type TopicAboutMeScalarWhereWithAggregatesInput = {
    AND?: TopicAboutMeScalarWhereWithAggregatesInput | TopicAboutMeScalarWhereWithAggregatesInput[]
    OR?: TopicAboutMeScalarWhereWithAggregatesInput[]
    NOT?: TopicAboutMeScalarWhereWithAggregatesInput | TopicAboutMeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopicAboutMe"> | string
    nameTopic?: StringWithAggregatesFilter<"TopicAboutMe"> | string
    detail?: StringWithAggregatesFilter<"TopicAboutMe"> | string
    isDelete?: BoolWithAggregatesFilter<"TopicAboutMe"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TopicAboutMe"> | Date | string
    updatedAd?: DateTimeWithAggregatesFilter<"TopicAboutMe"> | Date | string
    aboutMeId?: StringNullableWithAggregatesFilter<"TopicAboutMe"> | string | null
  }

  export type ImgTopicAboutMeWhereInput = {
    AND?: ImgTopicAboutMeWhereInput | ImgTopicAboutMeWhereInput[]
    OR?: ImgTopicAboutMeWhereInput[]
    NOT?: ImgTopicAboutMeWhereInput | ImgTopicAboutMeWhereInput[]
    id?: StringFilter<"ImgTopicAboutMe"> | string
    imgUrl?: StringFilter<"ImgTopicAboutMe"> | string
    filePath?: StringNullableFilter<"ImgTopicAboutMe"> | string | null
    isDelete?: BoolFilter<"ImgTopicAboutMe"> | boolean
    createdAt?: DateTimeFilter<"ImgTopicAboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"ImgTopicAboutMe"> | Date | string
    topicAboutMeId?: StringNullableFilter<"ImgTopicAboutMe"> | string | null
    topicAboutMe?: XOR<TopicAboutMeNullableScalarRelationFilter, TopicAboutMeWhereInput> | null
  }

  export type ImgTopicAboutMeOrderByWithRelationInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicAboutMeId?: SortOrderInput | SortOrder
    topicAboutMe?: TopicAboutMeOrderByWithRelationInput
    _relevance?: ImgTopicAboutMeOrderByRelevanceInput
  }

  export type ImgTopicAboutMeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImgTopicAboutMeWhereInput | ImgTopicAboutMeWhereInput[]
    OR?: ImgTopicAboutMeWhereInput[]
    NOT?: ImgTopicAboutMeWhereInput | ImgTopicAboutMeWhereInput[]
    imgUrl?: StringFilter<"ImgTopicAboutMe"> | string
    filePath?: StringNullableFilter<"ImgTopicAboutMe"> | string | null
    isDelete?: BoolFilter<"ImgTopicAboutMe"> | boolean
    createdAt?: DateTimeFilter<"ImgTopicAboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"ImgTopicAboutMe"> | Date | string
    topicAboutMeId?: StringNullableFilter<"ImgTopicAboutMe"> | string | null
    topicAboutMe?: XOR<TopicAboutMeNullableScalarRelationFilter, TopicAboutMeWhereInput> | null
  }, "id">

  export type ImgTopicAboutMeOrderByWithAggregationInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicAboutMeId?: SortOrderInput | SortOrder
    _count?: ImgTopicAboutMeCountOrderByAggregateInput
    _max?: ImgTopicAboutMeMaxOrderByAggregateInput
    _min?: ImgTopicAboutMeMinOrderByAggregateInput
  }

  export type ImgTopicAboutMeScalarWhereWithAggregatesInput = {
    AND?: ImgTopicAboutMeScalarWhereWithAggregatesInput | ImgTopicAboutMeScalarWhereWithAggregatesInput[]
    OR?: ImgTopicAboutMeScalarWhereWithAggregatesInput[]
    NOT?: ImgTopicAboutMeScalarWhereWithAggregatesInput | ImgTopicAboutMeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImgTopicAboutMe"> | string
    imgUrl?: StringWithAggregatesFilter<"ImgTopicAboutMe"> | string
    filePath?: StringNullableWithAggregatesFilter<"ImgTopicAboutMe"> | string | null
    isDelete?: BoolWithAggregatesFilter<"ImgTopicAboutMe"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ImgTopicAboutMe"> | Date | string
    updatedAd?: DateTimeWithAggregatesFilter<"ImgTopicAboutMe"> | Date | string
    topicAboutMeId?: StringNullableWithAggregatesFilter<"ImgTopicAboutMe"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    countryName?: StringFilter<"Post"> | string
    placeName?: StringFilter<"Post"> | string
    zone?: StringNullableFilter<"Post"> | string | null
    date?: DateTimeNullableFilter<"Post"> | Date | string | null
    isDelete?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAd?: DateTimeFilter<"Post"> | Date | string
    userId?: StringNullableFilter<"Post"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    imgPost?: ImgPostListRelationFilter
    topicPost?: TopicPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    countryName?: SortOrder
    placeName?: SortOrder
    zone?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    imgPost?: ImgPostOrderByRelationAggregateInput
    topicPost?: TopicPostOrderByRelationAggregateInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    countryName?: StringFilter<"Post"> | string
    placeName?: StringFilter<"Post"> | string
    zone?: StringNullableFilter<"Post"> | string | null
    date?: DateTimeNullableFilter<"Post"> | Date | string | null
    isDelete?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAd?: DateTimeFilter<"Post"> | Date | string
    userId?: StringNullableFilter<"Post"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    imgPost?: ImgPostListRelationFilter
    topicPost?: TopicPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    countryName?: SortOrder
    placeName?: SortOrder
    zone?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    countryName?: StringWithAggregatesFilter<"Post"> | string
    placeName?: StringWithAggregatesFilter<"Post"> | string
    zone?: StringNullableWithAggregatesFilter<"Post"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    isDelete?: BoolWithAggregatesFilter<"Post"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAd?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type ImgPostWhereInput = {
    AND?: ImgPostWhereInput | ImgPostWhereInput[]
    OR?: ImgPostWhereInput[]
    NOT?: ImgPostWhereInput | ImgPostWhereInput[]
    id?: StringFilter<"ImgPost"> | string
    imgUrl?: StringFilter<"ImgPost"> | string
    filePath?: StringNullableFilter<"ImgPost"> | string | null
    createdAt?: DateTimeFilter<"ImgPost"> | Date | string
    updatedAd?: DateTimeFilter<"ImgPost"> | Date | string
    postId?: StringNullableFilter<"ImgPost"> | string | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type ImgPostOrderByWithRelationInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrderInput | SortOrder
    post?: PostOrderByWithRelationInput
    _relevance?: ImgPostOrderByRelevanceInput
  }

  export type ImgPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImgPostWhereInput | ImgPostWhereInput[]
    OR?: ImgPostWhereInput[]
    NOT?: ImgPostWhereInput | ImgPostWhereInput[]
    imgUrl?: StringFilter<"ImgPost"> | string
    filePath?: StringNullableFilter<"ImgPost"> | string | null
    createdAt?: DateTimeFilter<"ImgPost"> | Date | string
    updatedAd?: DateTimeFilter<"ImgPost"> | Date | string
    postId?: StringNullableFilter<"ImgPost"> | string | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type ImgPostOrderByWithAggregationInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrderInput | SortOrder
    _count?: ImgPostCountOrderByAggregateInput
    _max?: ImgPostMaxOrderByAggregateInput
    _min?: ImgPostMinOrderByAggregateInput
  }

  export type ImgPostScalarWhereWithAggregatesInput = {
    AND?: ImgPostScalarWhereWithAggregatesInput | ImgPostScalarWhereWithAggregatesInput[]
    OR?: ImgPostScalarWhereWithAggregatesInput[]
    NOT?: ImgPostScalarWhereWithAggregatesInput | ImgPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImgPost"> | string
    imgUrl?: StringWithAggregatesFilter<"ImgPost"> | string
    filePath?: StringNullableWithAggregatesFilter<"ImgPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ImgPost"> | Date | string
    updatedAd?: DateTimeWithAggregatesFilter<"ImgPost"> | Date | string
    postId?: StringNullableWithAggregatesFilter<"ImgPost"> | string | null
  }

  export type TopicPostWhereInput = {
    AND?: TopicPostWhereInput | TopicPostWhereInput[]
    OR?: TopicPostWhereInput[]
    NOT?: TopicPostWhereInput | TopicPostWhereInput[]
    id?: StringFilter<"TopicPost"> | string
    nameTopic?: StringFilter<"TopicPost"> | string
    detail?: StringFilter<"TopicPost"> | string
    isDelete?: BoolFilter<"TopicPost"> | boolean
    createdAt?: DateTimeFilter<"TopicPost"> | Date | string
    updatedAd?: DateTimeFilter<"TopicPost"> | Date | string
    postId?: StringNullableFilter<"TopicPost"> | string | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    imgTopicPost?: ImgTopicPostListRelationFilter
  }

  export type TopicPostOrderByWithRelationInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrderInput | SortOrder
    post?: PostOrderByWithRelationInput
    imgTopicPost?: ImgTopicPostOrderByRelationAggregateInput
    _relevance?: TopicPostOrderByRelevanceInput
  }

  export type TopicPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicPostWhereInput | TopicPostWhereInput[]
    OR?: TopicPostWhereInput[]
    NOT?: TopicPostWhereInput | TopicPostWhereInput[]
    nameTopic?: StringFilter<"TopicPost"> | string
    detail?: StringFilter<"TopicPost"> | string
    isDelete?: BoolFilter<"TopicPost"> | boolean
    createdAt?: DateTimeFilter<"TopicPost"> | Date | string
    updatedAd?: DateTimeFilter<"TopicPost"> | Date | string
    postId?: StringNullableFilter<"TopicPost"> | string | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    imgTopicPost?: ImgTopicPostListRelationFilter
  }, "id">

  export type TopicPostOrderByWithAggregationInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrderInput | SortOrder
    _count?: TopicPostCountOrderByAggregateInput
    _max?: TopicPostMaxOrderByAggregateInput
    _min?: TopicPostMinOrderByAggregateInput
  }

  export type TopicPostScalarWhereWithAggregatesInput = {
    AND?: TopicPostScalarWhereWithAggregatesInput | TopicPostScalarWhereWithAggregatesInput[]
    OR?: TopicPostScalarWhereWithAggregatesInput[]
    NOT?: TopicPostScalarWhereWithAggregatesInput | TopicPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopicPost"> | string
    nameTopic?: StringWithAggregatesFilter<"TopicPost"> | string
    detail?: StringWithAggregatesFilter<"TopicPost"> | string
    isDelete?: BoolWithAggregatesFilter<"TopicPost"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TopicPost"> | Date | string
    updatedAd?: DateTimeWithAggregatesFilter<"TopicPost"> | Date | string
    postId?: StringNullableWithAggregatesFilter<"TopicPost"> | string | null
  }

  export type ImgTopicPostWhereInput = {
    AND?: ImgTopicPostWhereInput | ImgTopicPostWhereInput[]
    OR?: ImgTopicPostWhereInput[]
    NOT?: ImgTopicPostWhereInput | ImgTopicPostWhereInput[]
    id?: StringFilter<"ImgTopicPost"> | string
    imgUrl?: StringFilter<"ImgTopicPost"> | string
    filePath?: StringNullableFilter<"ImgTopicPost"> | string | null
    createdAt?: DateTimeFilter<"ImgTopicPost"> | Date | string
    updatedAd?: DateTimeFilter<"ImgTopicPost"> | Date | string
    topicPostId?: StringNullableFilter<"ImgTopicPost"> | string | null
    topicPost?: XOR<TopicPostNullableScalarRelationFilter, TopicPostWhereInput> | null
  }

  export type ImgTopicPostOrderByWithRelationInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicPostId?: SortOrderInput | SortOrder
    topicPost?: TopicPostOrderByWithRelationInput
    _relevance?: ImgTopicPostOrderByRelevanceInput
  }

  export type ImgTopicPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImgTopicPostWhereInput | ImgTopicPostWhereInput[]
    OR?: ImgTopicPostWhereInput[]
    NOT?: ImgTopicPostWhereInput | ImgTopicPostWhereInput[]
    imgUrl?: StringFilter<"ImgTopicPost"> | string
    filePath?: StringNullableFilter<"ImgTopicPost"> | string | null
    createdAt?: DateTimeFilter<"ImgTopicPost"> | Date | string
    updatedAd?: DateTimeFilter<"ImgTopicPost"> | Date | string
    topicPostId?: StringNullableFilter<"ImgTopicPost"> | string | null
    topicPost?: XOR<TopicPostNullableScalarRelationFilter, TopicPostWhereInput> | null
  }, "id">

  export type ImgTopicPostOrderByWithAggregationInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicPostId?: SortOrderInput | SortOrder
    _count?: ImgTopicPostCountOrderByAggregateInput
    _max?: ImgTopicPostMaxOrderByAggregateInput
    _min?: ImgTopicPostMinOrderByAggregateInput
  }

  export type ImgTopicPostScalarWhereWithAggregatesInput = {
    AND?: ImgTopicPostScalarWhereWithAggregatesInput | ImgTopicPostScalarWhereWithAggregatesInput[]
    OR?: ImgTopicPostScalarWhereWithAggregatesInput[]
    NOT?: ImgTopicPostScalarWhereWithAggregatesInput | ImgTopicPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImgTopicPost"> | string
    imgUrl?: StringWithAggregatesFilter<"ImgTopicPost"> | string
    filePath?: StringNullableWithAggregatesFilter<"ImgTopicPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ImgTopicPost"> | Date | string
    updatedAd?: DateTimeWithAggregatesFilter<"ImgTopicPost"> | Date | string
    topicPostId?: StringNullableWithAggregatesFilter<"ImgTopicPost"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    imgUrl?: string | null
    filePath?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    aboutMe?: AboutMeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    imgUrl?: string | null
    filePath?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    aboutMe?: AboutMeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    aboutMe?: AboutMeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    aboutMe?: AboutMeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    imgUrl?: string | null
    filePath?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutMeCreateInput = {
    id?: string
    year: number
    month: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    user?: UserCreateNestedOneWithoutAboutMeInput
    topicAboutMe?: TopicAboutMeCreateNestedManyWithoutAboutMeInput
  }

  export type AboutMeUncheckedCreateInput = {
    id?: string
    year: number
    month: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    userId?: string | null
    topicAboutMe?: TopicAboutMeUncheckedCreateNestedManyWithoutAboutMeInput
  }

  export type AboutMeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAboutMeNestedInput
    topicAboutMe?: TopicAboutMeUpdateManyWithoutAboutMeNestedInput
  }

  export type AboutMeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    topicAboutMe?: TopicAboutMeUncheckedUpdateManyWithoutAboutMeNestedInput
  }

  export type AboutMeCreateManyInput = {
    id?: string
    year: number
    month: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    userId?: string | null
  }

  export type AboutMeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutMeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicAboutMeCreateInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    aboutMe?: AboutMeCreateNestedOneWithoutTopicAboutMeInput
    imgTopicAboutMe?: ImgTopicAboutMeCreateNestedManyWithoutTopicAboutMeInput
  }

  export type TopicAboutMeUncheckedCreateInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    aboutMeId?: string | null
    imgTopicAboutMe?: ImgTopicAboutMeUncheckedCreateNestedManyWithoutTopicAboutMeInput
  }

  export type TopicAboutMeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: AboutMeUpdateOneWithoutTopicAboutMeNestedInput
    imgTopicAboutMe?: ImgTopicAboutMeUpdateManyWithoutTopicAboutMeNestedInput
  }

  export type TopicAboutMeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMeId?: NullableStringFieldUpdateOperationsInput | string | null
    imgTopicAboutMe?: ImgTopicAboutMeUncheckedUpdateManyWithoutTopicAboutMeNestedInput
  }

  export type TopicAboutMeCreateManyInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    aboutMeId?: string | null
  }

  export type TopicAboutMeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicAboutMeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgTopicAboutMeCreateInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    topicAboutMe?: TopicAboutMeCreateNestedOneWithoutImgTopicAboutMeInput
  }

  export type ImgTopicAboutMeUncheckedCreateInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    topicAboutMeId?: string | null
  }

  export type ImgTopicAboutMeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    topicAboutMe?: TopicAboutMeUpdateOneWithoutImgTopicAboutMeNestedInput
  }

  export type ImgTopicAboutMeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    topicAboutMeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgTopicAboutMeCreateManyInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    topicAboutMeId?: string | null
  }

  export type ImgTopicAboutMeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgTopicAboutMeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    topicAboutMeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    user?: UserCreateNestedOneWithoutPostsInput
    imgPost?: ImgPostCreateNestedManyWithoutPostInput
    topicPost?: TopicPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    userId?: string | null
    imgPost?: ImgPostUncheckedCreateNestedManyWithoutPostInput
    topicPost?: TopicPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPostsNestedInput
    imgPost?: ImgPostUpdateManyWithoutPostNestedInput
    topicPost?: TopicPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    imgPost?: ImgPostUncheckedUpdateManyWithoutPostNestedInput
    topicPost?: TopicPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    userId?: string | null
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgPostCreateInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    post?: PostCreateNestedOneWithoutImgPostInput
  }

  export type ImgPostUncheckedCreateInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    postId?: string | null
  }

  export type ImgPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutImgPostNestedInput
  }

  export type ImgPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgPostCreateManyInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    postId?: string | null
  }

  export type ImgPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicPostCreateInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    post?: PostCreateNestedOneWithoutTopicPostInput
    imgTopicPost?: ImgTopicPostCreateNestedManyWithoutTopicPostInput
  }

  export type TopicPostUncheckedCreateInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    postId?: string | null
    imgTopicPost?: ImgTopicPostUncheckedCreateNestedManyWithoutTopicPostInput
  }

  export type TopicPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutTopicPostNestedInput
    imgTopicPost?: ImgTopicPostUpdateManyWithoutTopicPostNestedInput
  }

  export type TopicPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    imgTopicPost?: ImgTopicPostUncheckedUpdateManyWithoutTopicPostNestedInput
  }

  export type TopicPostCreateManyInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    postId?: string | null
  }

  export type TopicPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgTopicPostCreateInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    topicPost?: TopicPostCreateNestedOneWithoutImgTopicPostInput
  }

  export type ImgTopicPostUncheckedCreateInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    topicPostId?: string | null
  }

  export type ImgTopicPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    topicPost?: TopicPostUpdateOneWithoutImgTopicPostNestedInput
  }

  export type ImgTopicPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    topicPostId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgTopicPostCreateManyInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    topicPostId?: string | null
  }

  export type ImgTopicPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgTopicPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    topicPostId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type AboutMeListRelationFilter = {
    every?: AboutMeWhereInput
    some?: AboutMeWhereInput
    none?: AboutMeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AboutMeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TopicAboutMeListRelationFilter = {
    every?: TopicAboutMeWhereInput
    some?: TopicAboutMeWhereInput
    none?: TopicAboutMeWhereInput
  }

  export type TopicAboutMeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AboutMeOrderByRelevanceInput = {
    fields: AboutMeOrderByRelevanceFieldEnum | AboutMeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AboutMeCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrder
  }

  export type AboutMeAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
  }

  export type AboutMeMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrder
  }

  export type AboutMeMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrder
  }

  export type AboutMeSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AboutMeNullableScalarRelationFilter = {
    is?: AboutMeWhereInput | null
    isNot?: AboutMeWhereInput | null
  }

  export type ImgTopicAboutMeListRelationFilter = {
    every?: ImgTopicAboutMeWhereInput
    some?: ImgTopicAboutMeWhereInput
    none?: ImgTopicAboutMeWhereInput
  }

  export type ImgTopicAboutMeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicAboutMeOrderByRelevanceInput = {
    fields: TopicAboutMeOrderByRelevanceFieldEnum | TopicAboutMeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TopicAboutMeCountOrderByAggregateInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    aboutMeId?: SortOrder
  }

  export type TopicAboutMeMaxOrderByAggregateInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    aboutMeId?: SortOrder
  }

  export type TopicAboutMeMinOrderByAggregateInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    aboutMeId?: SortOrder
  }

  export type TopicAboutMeNullableScalarRelationFilter = {
    is?: TopicAboutMeWhereInput | null
    isNot?: TopicAboutMeWhereInput | null
  }

  export type ImgTopicAboutMeOrderByRelevanceInput = {
    fields: ImgTopicAboutMeOrderByRelevanceFieldEnum | ImgTopicAboutMeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImgTopicAboutMeCountOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicAboutMeId?: SortOrder
  }

  export type ImgTopicAboutMeMaxOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicAboutMeId?: SortOrder
  }

  export type ImgTopicAboutMeMinOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicAboutMeId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ImgPostListRelationFilter = {
    every?: ImgPostWhereInput
    some?: ImgPostWhereInput
    none?: ImgPostWhereInput
  }

  export type TopicPostListRelationFilter = {
    every?: TopicPostWhereInput
    some?: TopicPostWhereInput
    none?: TopicPostWhereInput
  }

  export type ImgPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    placeName?: SortOrder
    zone?: SortOrder
    date?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    placeName?: SortOrder
    zone?: SortOrder
    date?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    placeName?: SortOrder
    zone?: SortOrder
    date?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type ImgPostOrderByRelevanceInput = {
    fields: ImgPostOrderByRelevanceFieldEnum | ImgPostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImgPostCountOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrder
  }

  export type ImgPostMaxOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrder
  }

  export type ImgPostMinOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrder
  }

  export type ImgTopicPostListRelationFilter = {
    every?: ImgTopicPostWhereInput
    some?: ImgTopicPostWhereInput
    none?: ImgTopicPostWhereInput
  }

  export type ImgTopicPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicPostOrderByRelevanceInput = {
    fields: TopicPostOrderByRelevanceFieldEnum | TopicPostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TopicPostCountOrderByAggregateInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrder
  }

  export type TopicPostMaxOrderByAggregateInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrder
  }

  export type TopicPostMinOrderByAggregateInput = {
    id?: SortOrder
    nameTopic?: SortOrder
    detail?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    postId?: SortOrder
  }

  export type TopicPostNullableScalarRelationFilter = {
    is?: TopicPostWhereInput | null
    isNot?: TopicPostWhereInput | null
  }

  export type ImgTopicPostOrderByRelevanceInput = {
    fields: ImgTopicPostOrderByRelevanceFieldEnum | ImgTopicPostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImgTopicPostCountOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicPostId?: SortOrder
  }

  export type ImgTopicPostMaxOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicPostId?: SortOrder
  }

  export type ImgTopicPostMinOrderByAggregateInput = {
    id?: SortOrder
    imgUrl?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAd?: SortOrder
    topicPostId?: SortOrder
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AboutMeCreateNestedManyWithoutUserInput = {
    create?: XOR<AboutMeCreateWithoutUserInput, AboutMeUncheckedCreateWithoutUserInput> | AboutMeCreateWithoutUserInput[] | AboutMeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AboutMeCreateOrConnectWithoutUserInput | AboutMeCreateOrConnectWithoutUserInput[]
    createMany?: AboutMeCreateManyUserInputEnvelope
    connect?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AboutMeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AboutMeCreateWithoutUserInput, AboutMeUncheckedCreateWithoutUserInput> | AboutMeCreateWithoutUserInput[] | AboutMeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AboutMeCreateOrConnectWithoutUserInput | AboutMeCreateOrConnectWithoutUserInput[]
    createMany?: AboutMeCreateManyUserInputEnvelope
    connect?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AboutMeUpdateManyWithoutUserNestedInput = {
    create?: XOR<AboutMeCreateWithoutUserInput, AboutMeUncheckedCreateWithoutUserInput> | AboutMeCreateWithoutUserInput[] | AboutMeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AboutMeCreateOrConnectWithoutUserInput | AboutMeCreateOrConnectWithoutUserInput[]
    upsert?: AboutMeUpsertWithWhereUniqueWithoutUserInput | AboutMeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AboutMeCreateManyUserInputEnvelope
    set?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
    disconnect?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
    delete?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
    connect?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
    update?: AboutMeUpdateWithWhereUniqueWithoutUserInput | AboutMeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AboutMeUpdateManyWithWhereWithoutUserInput | AboutMeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AboutMeScalarWhereInput | AboutMeScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AboutMeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AboutMeCreateWithoutUserInput, AboutMeUncheckedCreateWithoutUserInput> | AboutMeCreateWithoutUserInput[] | AboutMeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AboutMeCreateOrConnectWithoutUserInput | AboutMeCreateOrConnectWithoutUserInput[]
    upsert?: AboutMeUpsertWithWhereUniqueWithoutUserInput | AboutMeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AboutMeCreateManyUserInputEnvelope
    set?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
    disconnect?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
    delete?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
    connect?: AboutMeWhereUniqueInput | AboutMeWhereUniqueInput[]
    update?: AboutMeUpdateWithWhereUniqueWithoutUserInput | AboutMeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AboutMeUpdateManyWithWhereWithoutUserInput | AboutMeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AboutMeScalarWhereInput | AboutMeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAboutMeInput = {
    create?: XOR<UserCreateWithoutAboutMeInput, UserUncheckedCreateWithoutAboutMeInput>
    connectOrCreate?: UserCreateOrConnectWithoutAboutMeInput
    connect?: UserWhereUniqueInput
  }

  export type TopicAboutMeCreateNestedManyWithoutAboutMeInput = {
    create?: XOR<TopicAboutMeCreateWithoutAboutMeInput, TopicAboutMeUncheckedCreateWithoutAboutMeInput> | TopicAboutMeCreateWithoutAboutMeInput[] | TopicAboutMeUncheckedCreateWithoutAboutMeInput[]
    connectOrCreate?: TopicAboutMeCreateOrConnectWithoutAboutMeInput | TopicAboutMeCreateOrConnectWithoutAboutMeInput[]
    createMany?: TopicAboutMeCreateManyAboutMeInputEnvelope
    connect?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
  }

  export type TopicAboutMeUncheckedCreateNestedManyWithoutAboutMeInput = {
    create?: XOR<TopicAboutMeCreateWithoutAboutMeInput, TopicAboutMeUncheckedCreateWithoutAboutMeInput> | TopicAboutMeCreateWithoutAboutMeInput[] | TopicAboutMeUncheckedCreateWithoutAboutMeInput[]
    connectOrCreate?: TopicAboutMeCreateOrConnectWithoutAboutMeInput | TopicAboutMeCreateOrConnectWithoutAboutMeInput[]
    createMany?: TopicAboutMeCreateManyAboutMeInputEnvelope
    connect?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutAboutMeNestedInput = {
    create?: XOR<UserCreateWithoutAboutMeInput, UserUncheckedCreateWithoutAboutMeInput>
    connectOrCreate?: UserCreateOrConnectWithoutAboutMeInput
    upsert?: UserUpsertWithoutAboutMeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAboutMeInput, UserUpdateWithoutAboutMeInput>, UserUncheckedUpdateWithoutAboutMeInput>
  }

  export type TopicAboutMeUpdateManyWithoutAboutMeNestedInput = {
    create?: XOR<TopicAboutMeCreateWithoutAboutMeInput, TopicAboutMeUncheckedCreateWithoutAboutMeInput> | TopicAboutMeCreateWithoutAboutMeInput[] | TopicAboutMeUncheckedCreateWithoutAboutMeInput[]
    connectOrCreate?: TopicAboutMeCreateOrConnectWithoutAboutMeInput | TopicAboutMeCreateOrConnectWithoutAboutMeInput[]
    upsert?: TopicAboutMeUpsertWithWhereUniqueWithoutAboutMeInput | TopicAboutMeUpsertWithWhereUniqueWithoutAboutMeInput[]
    createMany?: TopicAboutMeCreateManyAboutMeInputEnvelope
    set?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
    disconnect?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
    delete?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
    connect?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
    update?: TopicAboutMeUpdateWithWhereUniqueWithoutAboutMeInput | TopicAboutMeUpdateWithWhereUniqueWithoutAboutMeInput[]
    updateMany?: TopicAboutMeUpdateManyWithWhereWithoutAboutMeInput | TopicAboutMeUpdateManyWithWhereWithoutAboutMeInput[]
    deleteMany?: TopicAboutMeScalarWhereInput | TopicAboutMeScalarWhereInput[]
  }

  export type TopicAboutMeUncheckedUpdateManyWithoutAboutMeNestedInput = {
    create?: XOR<TopicAboutMeCreateWithoutAboutMeInput, TopicAboutMeUncheckedCreateWithoutAboutMeInput> | TopicAboutMeCreateWithoutAboutMeInput[] | TopicAboutMeUncheckedCreateWithoutAboutMeInput[]
    connectOrCreate?: TopicAboutMeCreateOrConnectWithoutAboutMeInput | TopicAboutMeCreateOrConnectWithoutAboutMeInput[]
    upsert?: TopicAboutMeUpsertWithWhereUniqueWithoutAboutMeInput | TopicAboutMeUpsertWithWhereUniqueWithoutAboutMeInput[]
    createMany?: TopicAboutMeCreateManyAboutMeInputEnvelope
    set?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
    disconnect?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
    delete?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
    connect?: TopicAboutMeWhereUniqueInput | TopicAboutMeWhereUniqueInput[]
    update?: TopicAboutMeUpdateWithWhereUniqueWithoutAboutMeInput | TopicAboutMeUpdateWithWhereUniqueWithoutAboutMeInput[]
    updateMany?: TopicAboutMeUpdateManyWithWhereWithoutAboutMeInput | TopicAboutMeUpdateManyWithWhereWithoutAboutMeInput[]
    deleteMany?: TopicAboutMeScalarWhereInput | TopicAboutMeScalarWhereInput[]
  }

  export type AboutMeCreateNestedOneWithoutTopicAboutMeInput = {
    create?: XOR<AboutMeCreateWithoutTopicAboutMeInput, AboutMeUncheckedCreateWithoutTopicAboutMeInput>
    connectOrCreate?: AboutMeCreateOrConnectWithoutTopicAboutMeInput
    connect?: AboutMeWhereUniqueInput
  }

  export type ImgTopicAboutMeCreateNestedManyWithoutTopicAboutMeInput = {
    create?: XOR<ImgTopicAboutMeCreateWithoutTopicAboutMeInput, ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput> | ImgTopicAboutMeCreateWithoutTopicAboutMeInput[] | ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput[]
    connectOrCreate?: ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput | ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput[]
    createMany?: ImgTopicAboutMeCreateManyTopicAboutMeInputEnvelope
    connect?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
  }

  export type ImgTopicAboutMeUncheckedCreateNestedManyWithoutTopicAboutMeInput = {
    create?: XOR<ImgTopicAboutMeCreateWithoutTopicAboutMeInput, ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput> | ImgTopicAboutMeCreateWithoutTopicAboutMeInput[] | ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput[]
    connectOrCreate?: ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput | ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput[]
    createMany?: ImgTopicAboutMeCreateManyTopicAboutMeInputEnvelope
    connect?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
  }

  export type AboutMeUpdateOneWithoutTopicAboutMeNestedInput = {
    create?: XOR<AboutMeCreateWithoutTopicAboutMeInput, AboutMeUncheckedCreateWithoutTopicAboutMeInput>
    connectOrCreate?: AboutMeCreateOrConnectWithoutTopicAboutMeInput
    upsert?: AboutMeUpsertWithoutTopicAboutMeInput
    disconnect?: AboutMeWhereInput | boolean
    delete?: AboutMeWhereInput | boolean
    connect?: AboutMeWhereUniqueInput
    update?: XOR<XOR<AboutMeUpdateToOneWithWhereWithoutTopicAboutMeInput, AboutMeUpdateWithoutTopicAboutMeInput>, AboutMeUncheckedUpdateWithoutTopicAboutMeInput>
  }

  export type ImgTopicAboutMeUpdateManyWithoutTopicAboutMeNestedInput = {
    create?: XOR<ImgTopicAboutMeCreateWithoutTopicAboutMeInput, ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput> | ImgTopicAboutMeCreateWithoutTopicAboutMeInput[] | ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput[]
    connectOrCreate?: ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput | ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput[]
    upsert?: ImgTopicAboutMeUpsertWithWhereUniqueWithoutTopicAboutMeInput | ImgTopicAboutMeUpsertWithWhereUniqueWithoutTopicAboutMeInput[]
    createMany?: ImgTopicAboutMeCreateManyTopicAboutMeInputEnvelope
    set?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
    disconnect?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
    delete?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
    connect?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
    update?: ImgTopicAboutMeUpdateWithWhereUniqueWithoutTopicAboutMeInput | ImgTopicAboutMeUpdateWithWhereUniqueWithoutTopicAboutMeInput[]
    updateMany?: ImgTopicAboutMeUpdateManyWithWhereWithoutTopicAboutMeInput | ImgTopicAboutMeUpdateManyWithWhereWithoutTopicAboutMeInput[]
    deleteMany?: ImgTopicAboutMeScalarWhereInput | ImgTopicAboutMeScalarWhereInput[]
  }

  export type ImgTopicAboutMeUncheckedUpdateManyWithoutTopicAboutMeNestedInput = {
    create?: XOR<ImgTopicAboutMeCreateWithoutTopicAboutMeInput, ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput> | ImgTopicAboutMeCreateWithoutTopicAboutMeInput[] | ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput[]
    connectOrCreate?: ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput | ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput[]
    upsert?: ImgTopicAboutMeUpsertWithWhereUniqueWithoutTopicAboutMeInput | ImgTopicAboutMeUpsertWithWhereUniqueWithoutTopicAboutMeInput[]
    createMany?: ImgTopicAboutMeCreateManyTopicAboutMeInputEnvelope
    set?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
    disconnect?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
    delete?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
    connect?: ImgTopicAboutMeWhereUniqueInput | ImgTopicAboutMeWhereUniqueInput[]
    update?: ImgTopicAboutMeUpdateWithWhereUniqueWithoutTopicAboutMeInput | ImgTopicAboutMeUpdateWithWhereUniqueWithoutTopicAboutMeInput[]
    updateMany?: ImgTopicAboutMeUpdateManyWithWhereWithoutTopicAboutMeInput | ImgTopicAboutMeUpdateManyWithWhereWithoutTopicAboutMeInput[]
    deleteMany?: ImgTopicAboutMeScalarWhereInput | ImgTopicAboutMeScalarWhereInput[]
  }

  export type TopicAboutMeCreateNestedOneWithoutImgTopicAboutMeInput = {
    create?: XOR<TopicAboutMeCreateWithoutImgTopicAboutMeInput, TopicAboutMeUncheckedCreateWithoutImgTopicAboutMeInput>
    connectOrCreate?: TopicAboutMeCreateOrConnectWithoutImgTopicAboutMeInput
    connect?: TopicAboutMeWhereUniqueInput
  }

  export type TopicAboutMeUpdateOneWithoutImgTopicAboutMeNestedInput = {
    create?: XOR<TopicAboutMeCreateWithoutImgTopicAboutMeInput, TopicAboutMeUncheckedCreateWithoutImgTopicAboutMeInput>
    connectOrCreate?: TopicAboutMeCreateOrConnectWithoutImgTopicAboutMeInput
    upsert?: TopicAboutMeUpsertWithoutImgTopicAboutMeInput
    disconnect?: TopicAboutMeWhereInput | boolean
    delete?: TopicAboutMeWhereInput | boolean
    connect?: TopicAboutMeWhereUniqueInput
    update?: XOR<XOR<TopicAboutMeUpdateToOneWithWhereWithoutImgTopicAboutMeInput, TopicAboutMeUpdateWithoutImgTopicAboutMeInput>, TopicAboutMeUncheckedUpdateWithoutImgTopicAboutMeInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ImgPostCreateNestedManyWithoutPostInput = {
    create?: XOR<ImgPostCreateWithoutPostInput, ImgPostUncheckedCreateWithoutPostInput> | ImgPostCreateWithoutPostInput[] | ImgPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImgPostCreateOrConnectWithoutPostInput | ImgPostCreateOrConnectWithoutPostInput[]
    createMany?: ImgPostCreateManyPostInputEnvelope
    connect?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
  }

  export type TopicPostCreateNestedManyWithoutPostInput = {
    create?: XOR<TopicPostCreateWithoutPostInput, TopicPostUncheckedCreateWithoutPostInput> | TopicPostCreateWithoutPostInput[] | TopicPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TopicPostCreateOrConnectWithoutPostInput | TopicPostCreateOrConnectWithoutPostInput[]
    createMany?: TopicPostCreateManyPostInputEnvelope
    connect?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
  }

  export type ImgPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ImgPostCreateWithoutPostInput, ImgPostUncheckedCreateWithoutPostInput> | ImgPostCreateWithoutPostInput[] | ImgPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImgPostCreateOrConnectWithoutPostInput | ImgPostCreateOrConnectWithoutPostInput[]
    createMany?: ImgPostCreateManyPostInputEnvelope
    connect?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
  }

  export type TopicPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<TopicPostCreateWithoutPostInput, TopicPostUncheckedCreateWithoutPostInput> | TopicPostCreateWithoutPostInput[] | TopicPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TopicPostCreateOrConnectWithoutPostInput | TopicPostCreateOrConnectWithoutPostInput[]
    createMany?: TopicPostCreateManyPostInputEnvelope
    connect?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ImgPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImgPostCreateWithoutPostInput, ImgPostUncheckedCreateWithoutPostInput> | ImgPostCreateWithoutPostInput[] | ImgPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImgPostCreateOrConnectWithoutPostInput | ImgPostCreateOrConnectWithoutPostInput[]
    upsert?: ImgPostUpsertWithWhereUniqueWithoutPostInput | ImgPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImgPostCreateManyPostInputEnvelope
    set?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
    disconnect?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
    delete?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
    connect?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
    update?: ImgPostUpdateWithWhereUniqueWithoutPostInput | ImgPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImgPostUpdateManyWithWhereWithoutPostInput | ImgPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImgPostScalarWhereInput | ImgPostScalarWhereInput[]
  }

  export type TopicPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<TopicPostCreateWithoutPostInput, TopicPostUncheckedCreateWithoutPostInput> | TopicPostCreateWithoutPostInput[] | TopicPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TopicPostCreateOrConnectWithoutPostInput | TopicPostCreateOrConnectWithoutPostInput[]
    upsert?: TopicPostUpsertWithWhereUniqueWithoutPostInput | TopicPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TopicPostCreateManyPostInputEnvelope
    set?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
    disconnect?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
    delete?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
    connect?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
    update?: TopicPostUpdateWithWhereUniqueWithoutPostInput | TopicPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TopicPostUpdateManyWithWhereWithoutPostInput | TopicPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TopicPostScalarWhereInput | TopicPostScalarWhereInput[]
  }

  export type ImgPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImgPostCreateWithoutPostInput, ImgPostUncheckedCreateWithoutPostInput> | ImgPostCreateWithoutPostInput[] | ImgPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImgPostCreateOrConnectWithoutPostInput | ImgPostCreateOrConnectWithoutPostInput[]
    upsert?: ImgPostUpsertWithWhereUniqueWithoutPostInput | ImgPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImgPostCreateManyPostInputEnvelope
    set?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
    disconnect?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
    delete?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
    connect?: ImgPostWhereUniqueInput | ImgPostWhereUniqueInput[]
    update?: ImgPostUpdateWithWhereUniqueWithoutPostInput | ImgPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImgPostUpdateManyWithWhereWithoutPostInput | ImgPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImgPostScalarWhereInput | ImgPostScalarWhereInput[]
  }

  export type TopicPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<TopicPostCreateWithoutPostInput, TopicPostUncheckedCreateWithoutPostInput> | TopicPostCreateWithoutPostInput[] | TopicPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TopicPostCreateOrConnectWithoutPostInput | TopicPostCreateOrConnectWithoutPostInput[]
    upsert?: TopicPostUpsertWithWhereUniqueWithoutPostInput | TopicPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TopicPostCreateManyPostInputEnvelope
    set?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
    disconnect?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
    delete?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
    connect?: TopicPostWhereUniqueInput | TopicPostWhereUniqueInput[]
    update?: TopicPostUpdateWithWhereUniqueWithoutPostInput | TopicPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TopicPostUpdateManyWithWhereWithoutPostInput | TopicPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TopicPostScalarWhereInput | TopicPostScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutImgPostInput = {
    create?: XOR<PostCreateWithoutImgPostInput, PostUncheckedCreateWithoutImgPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutImgPostInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneWithoutImgPostNestedInput = {
    create?: XOR<PostCreateWithoutImgPostInput, PostUncheckedCreateWithoutImgPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutImgPostInput
    upsert?: PostUpsertWithoutImgPostInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutImgPostInput, PostUpdateWithoutImgPostInput>, PostUncheckedUpdateWithoutImgPostInput>
  }

  export type PostCreateNestedOneWithoutTopicPostInput = {
    create?: XOR<PostCreateWithoutTopicPostInput, PostUncheckedCreateWithoutTopicPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutTopicPostInput
    connect?: PostWhereUniqueInput
  }

  export type ImgTopicPostCreateNestedManyWithoutTopicPostInput = {
    create?: XOR<ImgTopicPostCreateWithoutTopicPostInput, ImgTopicPostUncheckedCreateWithoutTopicPostInput> | ImgTopicPostCreateWithoutTopicPostInput[] | ImgTopicPostUncheckedCreateWithoutTopicPostInput[]
    connectOrCreate?: ImgTopicPostCreateOrConnectWithoutTopicPostInput | ImgTopicPostCreateOrConnectWithoutTopicPostInput[]
    createMany?: ImgTopicPostCreateManyTopicPostInputEnvelope
    connect?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
  }

  export type ImgTopicPostUncheckedCreateNestedManyWithoutTopicPostInput = {
    create?: XOR<ImgTopicPostCreateWithoutTopicPostInput, ImgTopicPostUncheckedCreateWithoutTopicPostInput> | ImgTopicPostCreateWithoutTopicPostInput[] | ImgTopicPostUncheckedCreateWithoutTopicPostInput[]
    connectOrCreate?: ImgTopicPostCreateOrConnectWithoutTopicPostInput | ImgTopicPostCreateOrConnectWithoutTopicPostInput[]
    createMany?: ImgTopicPostCreateManyTopicPostInputEnvelope
    connect?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
  }

  export type PostUpdateOneWithoutTopicPostNestedInput = {
    create?: XOR<PostCreateWithoutTopicPostInput, PostUncheckedCreateWithoutTopicPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutTopicPostInput
    upsert?: PostUpsertWithoutTopicPostInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTopicPostInput, PostUpdateWithoutTopicPostInput>, PostUncheckedUpdateWithoutTopicPostInput>
  }

  export type ImgTopicPostUpdateManyWithoutTopicPostNestedInput = {
    create?: XOR<ImgTopicPostCreateWithoutTopicPostInput, ImgTopicPostUncheckedCreateWithoutTopicPostInput> | ImgTopicPostCreateWithoutTopicPostInput[] | ImgTopicPostUncheckedCreateWithoutTopicPostInput[]
    connectOrCreate?: ImgTopicPostCreateOrConnectWithoutTopicPostInput | ImgTopicPostCreateOrConnectWithoutTopicPostInput[]
    upsert?: ImgTopicPostUpsertWithWhereUniqueWithoutTopicPostInput | ImgTopicPostUpsertWithWhereUniqueWithoutTopicPostInput[]
    createMany?: ImgTopicPostCreateManyTopicPostInputEnvelope
    set?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
    disconnect?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
    delete?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
    connect?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
    update?: ImgTopicPostUpdateWithWhereUniqueWithoutTopicPostInput | ImgTopicPostUpdateWithWhereUniqueWithoutTopicPostInput[]
    updateMany?: ImgTopicPostUpdateManyWithWhereWithoutTopicPostInput | ImgTopicPostUpdateManyWithWhereWithoutTopicPostInput[]
    deleteMany?: ImgTopicPostScalarWhereInput | ImgTopicPostScalarWhereInput[]
  }

  export type ImgTopicPostUncheckedUpdateManyWithoutTopicPostNestedInput = {
    create?: XOR<ImgTopicPostCreateWithoutTopicPostInput, ImgTopicPostUncheckedCreateWithoutTopicPostInput> | ImgTopicPostCreateWithoutTopicPostInput[] | ImgTopicPostUncheckedCreateWithoutTopicPostInput[]
    connectOrCreate?: ImgTopicPostCreateOrConnectWithoutTopicPostInput | ImgTopicPostCreateOrConnectWithoutTopicPostInput[]
    upsert?: ImgTopicPostUpsertWithWhereUniqueWithoutTopicPostInput | ImgTopicPostUpsertWithWhereUniqueWithoutTopicPostInput[]
    createMany?: ImgTopicPostCreateManyTopicPostInputEnvelope
    set?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
    disconnect?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
    delete?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
    connect?: ImgTopicPostWhereUniqueInput | ImgTopicPostWhereUniqueInput[]
    update?: ImgTopicPostUpdateWithWhereUniqueWithoutTopicPostInput | ImgTopicPostUpdateWithWhereUniqueWithoutTopicPostInput[]
    updateMany?: ImgTopicPostUpdateManyWithWhereWithoutTopicPostInput | ImgTopicPostUpdateManyWithWhereWithoutTopicPostInput[]
    deleteMany?: ImgTopicPostScalarWhereInput | ImgTopicPostScalarWhereInput[]
  }

  export type TopicPostCreateNestedOneWithoutImgTopicPostInput = {
    create?: XOR<TopicPostCreateWithoutImgTopicPostInput, TopicPostUncheckedCreateWithoutImgTopicPostInput>
    connectOrCreate?: TopicPostCreateOrConnectWithoutImgTopicPostInput
    connect?: TopicPostWhereUniqueInput
  }

  export type TopicPostUpdateOneWithoutImgTopicPostNestedInput = {
    create?: XOR<TopicPostCreateWithoutImgTopicPostInput, TopicPostUncheckedCreateWithoutImgTopicPostInput>
    connectOrCreate?: TopicPostCreateOrConnectWithoutImgTopicPostInput
    upsert?: TopicPostUpsertWithoutImgTopicPostInput
    disconnect?: TopicPostWhereInput | boolean
    delete?: TopicPostWhereInput | boolean
    connect?: TopicPostWhereUniqueInput
    update?: XOR<XOR<TopicPostUpdateToOneWithWhereWithoutImgTopicPostInput, TopicPostUpdateWithoutImgTopicPostInput>, TopicPostUncheckedUpdateWithoutImgTopicPostInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    imgPost?: ImgPostCreateNestedManyWithoutPostInput
    topicPost?: TopicPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    imgPost?: ImgPostUncheckedCreateNestedManyWithoutPostInput
    topicPost?: TopicPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AboutMeCreateWithoutUserInput = {
    id?: string
    year: number
    month: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    topicAboutMe?: TopicAboutMeCreateNestedManyWithoutAboutMeInput
  }

  export type AboutMeUncheckedCreateWithoutUserInput = {
    id?: string
    year: number
    month: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    topicAboutMe?: TopicAboutMeUncheckedCreateNestedManyWithoutAboutMeInput
  }

  export type AboutMeCreateOrConnectWithoutUserInput = {
    where: AboutMeWhereUniqueInput
    create: XOR<AboutMeCreateWithoutUserInput, AboutMeUncheckedCreateWithoutUserInput>
  }

  export type AboutMeCreateManyUserInputEnvelope = {
    data: AboutMeCreateManyUserInput | AboutMeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    countryName?: StringFilter<"Post"> | string
    placeName?: StringFilter<"Post"> | string
    zone?: StringNullableFilter<"Post"> | string | null
    date?: DateTimeNullableFilter<"Post"> | Date | string | null
    isDelete?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAd?: DateTimeFilter<"Post"> | Date | string
    userId?: StringNullableFilter<"Post"> | string | null
  }

  export type AboutMeUpsertWithWhereUniqueWithoutUserInput = {
    where: AboutMeWhereUniqueInput
    update: XOR<AboutMeUpdateWithoutUserInput, AboutMeUncheckedUpdateWithoutUserInput>
    create: XOR<AboutMeCreateWithoutUserInput, AboutMeUncheckedCreateWithoutUserInput>
  }

  export type AboutMeUpdateWithWhereUniqueWithoutUserInput = {
    where: AboutMeWhereUniqueInput
    data: XOR<AboutMeUpdateWithoutUserInput, AboutMeUncheckedUpdateWithoutUserInput>
  }

  export type AboutMeUpdateManyWithWhereWithoutUserInput = {
    where: AboutMeScalarWhereInput
    data: XOR<AboutMeUpdateManyMutationInput, AboutMeUncheckedUpdateManyWithoutUserInput>
  }

  export type AboutMeScalarWhereInput = {
    AND?: AboutMeScalarWhereInput | AboutMeScalarWhereInput[]
    OR?: AboutMeScalarWhereInput[]
    NOT?: AboutMeScalarWhereInput | AboutMeScalarWhereInput[]
    id?: StringFilter<"AboutMe"> | string
    year?: IntFilter<"AboutMe"> | number
    month?: IntFilter<"AboutMe"> | number
    isDelete?: BoolFilter<"AboutMe"> | boolean
    createdAt?: DateTimeFilter<"AboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"AboutMe"> | Date | string
    userId?: StringNullableFilter<"AboutMe"> | string | null
  }

  export type UserCreateWithoutAboutMeInput = {
    id?: string
    email: string
    username: string
    imgUrl?: string | null
    filePath?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAboutMeInput = {
    id?: string
    email: string
    username: string
    imgUrl?: string | null
    filePath?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAboutMeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAboutMeInput, UserUncheckedCreateWithoutAboutMeInput>
  }

  export type TopicAboutMeCreateWithoutAboutMeInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    imgTopicAboutMe?: ImgTopicAboutMeCreateNestedManyWithoutTopicAboutMeInput
  }

  export type TopicAboutMeUncheckedCreateWithoutAboutMeInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    imgTopicAboutMe?: ImgTopicAboutMeUncheckedCreateNestedManyWithoutTopicAboutMeInput
  }

  export type TopicAboutMeCreateOrConnectWithoutAboutMeInput = {
    where: TopicAboutMeWhereUniqueInput
    create: XOR<TopicAboutMeCreateWithoutAboutMeInput, TopicAboutMeUncheckedCreateWithoutAboutMeInput>
  }

  export type TopicAboutMeCreateManyAboutMeInputEnvelope = {
    data: TopicAboutMeCreateManyAboutMeInput | TopicAboutMeCreateManyAboutMeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAboutMeInput = {
    update: XOR<UserUpdateWithoutAboutMeInput, UserUncheckedUpdateWithoutAboutMeInput>
    create: XOR<UserCreateWithoutAboutMeInput, UserUncheckedCreateWithoutAboutMeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAboutMeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAboutMeInput, UserUncheckedUpdateWithoutAboutMeInput>
  }

  export type UserUpdateWithoutAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TopicAboutMeUpsertWithWhereUniqueWithoutAboutMeInput = {
    where: TopicAboutMeWhereUniqueInput
    update: XOR<TopicAboutMeUpdateWithoutAboutMeInput, TopicAboutMeUncheckedUpdateWithoutAboutMeInput>
    create: XOR<TopicAboutMeCreateWithoutAboutMeInput, TopicAboutMeUncheckedCreateWithoutAboutMeInput>
  }

  export type TopicAboutMeUpdateWithWhereUniqueWithoutAboutMeInput = {
    where: TopicAboutMeWhereUniqueInput
    data: XOR<TopicAboutMeUpdateWithoutAboutMeInput, TopicAboutMeUncheckedUpdateWithoutAboutMeInput>
  }

  export type TopicAboutMeUpdateManyWithWhereWithoutAboutMeInput = {
    where: TopicAboutMeScalarWhereInput
    data: XOR<TopicAboutMeUpdateManyMutationInput, TopicAboutMeUncheckedUpdateManyWithoutAboutMeInput>
  }

  export type TopicAboutMeScalarWhereInput = {
    AND?: TopicAboutMeScalarWhereInput | TopicAboutMeScalarWhereInput[]
    OR?: TopicAboutMeScalarWhereInput[]
    NOT?: TopicAboutMeScalarWhereInput | TopicAboutMeScalarWhereInput[]
    id?: StringFilter<"TopicAboutMe"> | string
    nameTopic?: StringFilter<"TopicAboutMe"> | string
    detail?: StringFilter<"TopicAboutMe"> | string
    isDelete?: BoolFilter<"TopicAboutMe"> | boolean
    createdAt?: DateTimeFilter<"TopicAboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"TopicAboutMe"> | Date | string
    aboutMeId?: StringNullableFilter<"TopicAboutMe"> | string | null
  }

  export type AboutMeCreateWithoutTopicAboutMeInput = {
    id?: string
    year: number
    month: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    user?: UserCreateNestedOneWithoutAboutMeInput
  }

  export type AboutMeUncheckedCreateWithoutTopicAboutMeInput = {
    id?: string
    year: number
    month: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    userId?: string | null
  }

  export type AboutMeCreateOrConnectWithoutTopicAboutMeInput = {
    where: AboutMeWhereUniqueInput
    create: XOR<AboutMeCreateWithoutTopicAboutMeInput, AboutMeUncheckedCreateWithoutTopicAboutMeInput>
  }

  export type ImgTopicAboutMeCreateWithoutTopicAboutMeInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgTopicAboutMeCreateOrConnectWithoutTopicAboutMeInput = {
    where: ImgTopicAboutMeWhereUniqueInput
    create: XOR<ImgTopicAboutMeCreateWithoutTopicAboutMeInput, ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput>
  }

  export type ImgTopicAboutMeCreateManyTopicAboutMeInputEnvelope = {
    data: ImgTopicAboutMeCreateManyTopicAboutMeInput | ImgTopicAboutMeCreateManyTopicAboutMeInput[]
    skipDuplicates?: boolean
  }

  export type AboutMeUpsertWithoutTopicAboutMeInput = {
    update: XOR<AboutMeUpdateWithoutTopicAboutMeInput, AboutMeUncheckedUpdateWithoutTopicAboutMeInput>
    create: XOR<AboutMeCreateWithoutTopicAboutMeInput, AboutMeUncheckedCreateWithoutTopicAboutMeInput>
    where?: AboutMeWhereInput
  }

  export type AboutMeUpdateToOneWithWhereWithoutTopicAboutMeInput = {
    where?: AboutMeWhereInput
    data: XOR<AboutMeUpdateWithoutTopicAboutMeInput, AboutMeUncheckedUpdateWithoutTopicAboutMeInput>
  }

  export type AboutMeUpdateWithoutTopicAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAboutMeNestedInput
  }

  export type AboutMeUncheckedUpdateWithoutTopicAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgTopicAboutMeUpsertWithWhereUniqueWithoutTopicAboutMeInput = {
    where: ImgTopicAboutMeWhereUniqueInput
    update: XOR<ImgTopicAboutMeUpdateWithoutTopicAboutMeInput, ImgTopicAboutMeUncheckedUpdateWithoutTopicAboutMeInput>
    create: XOR<ImgTopicAboutMeCreateWithoutTopicAboutMeInput, ImgTopicAboutMeUncheckedCreateWithoutTopicAboutMeInput>
  }

  export type ImgTopicAboutMeUpdateWithWhereUniqueWithoutTopicAboutMeInput = {
    where: ImgTopicAboutMeWhereUniqueInput
    data: XOR<ImgTopicAboutMeUpdateWithoutTopicAboutMeInput, ImgTopicAboutMeUncheckedUpdateWithoutTopicAboutMeInput>
  }

  export type ImgTopicAboutMeUpdateManyWithWhereWithoutTopicAboutMeInput = {
    where: ImgTopicAboutMeScalarWhereInput
    data: XOR<ImgTopicAboutMeUpdateManyMutationInput, ImgTopicAboutMeUncheckedUpdateManyWithoutTopicAboutMeInput>
  }

  export type ImgTopicAboutMeScalarWhereInput = {
    AND?: ImgTopicAboutMeScalarWhereInput | ImgTopicAboutMeScalarWhereInput[]
    OR?: ImgTopicAboutMeScalarWhereInput[]
    NOT?: ImgTopicAboutMeScalarWhereInput | ImgTopicAboutMeScalarWhereInput[]
    id?: StringFilter<"ImgTopicAboutMe"> | string
    imgUrl?: StringFilter<"ImgTopicAboutMe"> | string
    filePath?: StringNullableFilter<"ImgTopicAboutMe"> | string | null
    isDelete?: BoolFilter<"ImgTopicAboutMe"> | boolean
    createdAt?: DateTimeFilter<"ImgTopicAboutMe"> | Date | string
    updatedAd?: DateTimeFilter<"ImgTopicAboutMe"> | Date | string
    topicAboutMeId?: StringNullableFilter<"ImgTopicAboutMe"> | string | null
  }

  export type TopicAboutMeCreateWithoutImgTopicAboutMeInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    aboutMe?: AboutMeCreateNestedOneWithoutTopicAboutMeInput
  }

  export type TopicAboutMeUncheckedCreateWithoutImgTopicAboutMeInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    aboutMeId?: string | null
  }

  export type TopicAboutMeCreateOrConnectWithoutImgTopicAboutMeInput = {
    where: TopicAboutMeWhereUniqueInput
    create: XOR<TopicAboutMeCreateWithoutImgTopicAboutMeInput, TopicAboutMeUncheckedCreateWithoutImgTopicAboutMeInput>
  }

  export type TopicAboutMeUpsertWithoutImgTopicAboutMeInput = {
    update: XOR<TopicAboutMeUpdateWithoutImgTopicAboutMeInput, TopicAboutMeUncheckedUpdateWithoutImgTopicAboutMeInput>
    create: XOR<TopicAboutMeCreateWithoutImgTopicAboutMeInput, TopicAboutMeUncheckedCreateWithoutImgTopicAboutMeInput>
    where?: TopicAboutMeWhereInput
  }

  export type TopicAboutMeUpdateToOneWithWhereWithoutImgTopicAboutMeInput = {
    where?: TopicAboutMeWhereInput
    data: XOR<TopicAboutMeUpdateWithoutImgTopicAboutMeInput, TopicAboutMeUncheckedUpdateWithoutImgTopicAboutMeInput>
  }

  export type TopicAboutMeUpdateWithoutImgTopicAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: AboutMeUpdateOneWithoutTopicAboutMeNestedInput
  }

  export type TopicAboutMeUncheckedUpdateWithoutImgTopicAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    username: string
    imgUrl?: string | null
    filePath?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    aboutMe?: AboutMeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    username: string
    imgUrl?: string | null
    filePath?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
    aboutMe?: AboutMeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ImgPostCreateWithoutPostInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgPostUncheckedCreateWithoutPostInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgPostCreateOrConnectWithoutPostInput = {
    where: ImgPostWhereUniqueInput
    create: XOR<ImgPostCreateWithoutPostInput, ImgPostUncheckedCreateWithoutPostInput>
  }

  export type ImgPostCreateManyPostInputEnvelope = {
    data: ImgPostCreateManyPostInput | ImgPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type TopicPostCreateWithoutPostInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    imgTopicPost?: ImgTopicPostCreateNestedManyWithoutTopicPostInput
  }

  export type TopicPostUncheckedCreateWithoutPostInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    imgTopicPost?: ImgTopicPostUncheckedCreateNestedManyWithoutTopicPostInput
  }

  export type TopicPostCreateOrConnectWithoutPostInput = {
    where: TopicPostWhereUniqueInput
    create: XOR<TopicPostCreateWithoutPostInput, TopicPostUncheckedCreateWithoutPostInput>
  }

  export type TopicPostCreateManyPostInputEnvelope = {
    data: TopicPostCreateManyPostInput | TopicPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: AboutMeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: AboutMeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImgPostUpsertWithWhereUniqueWithoutPostInput = {
    where: ImgPostWhereUniqueInput
    update: XOR<ImgPostUpdateWithoutPostInput, ImgPostUncheckedUpdateWithoutPostInput>
    create: XOR<ImgPostCreateWithoutPostInput, ImgPostUncheckedCreateWithoutPostInput>
  }

  export type ImgPostUpdateWithWhereUniqueWithoutPostInput = {
    where: ImgPostWhereUniqueInput
    data: XOR<ImgPostUpdateWithoutPostInput, ImgPostUncheckedUpdateWithoutPostInput>
  }

  export type ImgPostUpdateManyWithWhereWithoutPostInput = {
    where: ImgPostScalarWhereInput
    data: XOR<ImgPostUpdateManyMutationInput, ImgPostUncheckedUpdateManyWithoutPostInput>
  }

  export type ImgPostScalarWhereInput = {
    AND?: ImgPostScalarWhereInput | ImgPostScalarWhereInput[]
    OR?: ImgPostScalarWhereInput[]
    NOT?: ImgPostScalarWhereInput | ImgPostScalarWhereInput[]
    id?: StringFilter<"ImgPost"> | string
    imgUrl?: StringFilter<"ImgPost"> | string
    filePath?: StringNullableFilter<"ImgPost"> | string | null
    createdAt?: DateTimeFilter<"ImgPost"> | Date | string
    updatedAd?: DateTimeFilter<"ImgPost"> | Date | string
    postId?: StringNullableFilter<"ImgPost"> | string | null
  }

  export type TopicPostUpsertWithWhereUniqueWithoutPostInput = {
    where: TopicPostWhereUniqueInput
    update: XOR<TopicPostUpdateWithoutPostInput, TopicPostUncheckedUpdateWithoutPostInput>
    create: XOR<TopicPostCreateWithoutPostInput, TopicPostUncheckedCreateWithoutPostInput>
  }

  export type TopicPostUpdateWithWhereUniqueWithoutPostInput = {
    where: TopicPostWhereUniqueInput
    data: XOR<TopicPostUpdateWithoutPostInput, TopicPostUncheckedUpdateWithoutPostInput>
  }

  export type TopicPostUpdateManyWithWhereWithoutPostInput = {
    where: TopicPostScalarWhereInput
    data: XOR<TopicPostUpdateManyMutationInput, TopicPostUncheckedUpdateManyWithoutPostInput>
  }

  export type TopicPostScalarWhereInput = {
    AND?: TopicPostScalarWhereInput | TopicPostScalarWhereInput[]
    OR?: TopicPostScalarWhereInput[]
    NOT?: TopicPostScalarWhereInput | TopicPostScalarWhereInput[]
    id?: StringFilter<"TopicPost"> | string
    nameTopic?: StringFilter<"TopicPost"> | string
    detail?: StringFilter<"TopicPost"> | string
    isDelete?: BoolFilter<"TopicPost"> | boolean
    createdAt?: DateTimeFilter<"TopicPost"> | Date | string
    updatedAd?: DateTimeFilter<"TopicPost"> | Date | string
    postId?: StringNullableFilter<"TopicPost"> | string | null
  }

  export type PostCreateWithoutImgPostInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    user?: UserCreateNestedOneWithoutPostsInput
    topicPost?: TopicPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutImgPostInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    userId?: string | null
    topicPost?: TopicPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutImgPostInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImgPostInput, PostUncheckedCreateWithoutImgPostInput>
  }

  export type PostUpsertWithoutImgPostInput = {
    update: XOR<PostUpdateWithoutImgPostInput, PostUncheckedUpdateWithoutImgPostInput>
    create: XOR<PostCreateWithoutImgPostInput, PostUncheckedCreateWithoutImgPostInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutImgPostInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutImgPostInput, PostUncheckedUpdateWithoutImgPostInput>
  }

  export type PostUpdateWithoutImgPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPostsNestedInput
    topicPost?: TopicPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutImgPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    topicPost?: TopicPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutTopicPostInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    user?: UserCreateNestedOneWithoutPostsInput
    imgPost?: ImgPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTopicPostInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    userId?: string | null
    imgPost?: ImgPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTopicPostInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTopicPostInput, PostUncheckedCreateWithoutTopicPostInput>
  }

  export type ImgTopicPostCreateWithoutTopicPostInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgTopicPostUncheckedCreateWithoutTopicPostInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgTopicPostCreateOrConnectWithoutTopicPostInput = {
    where: ImgTopicPostWhereUniqueInput
    create: XOR<ImgTopicPostCreateWithoutTopicPostInput, ImgTopicPostUncheckedCreateWithoutTopicPostInput>
  }

  export type ImgTopicPostCreateManyTopicPostInputEnvelope = {
    data: ImgTopicPostCreateManyTopicPostInput | ImgTopicPostCreateManyTopicPostInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutTopicPostInput = {
    update: XOR<PostUpdateWithoutTopicPostInput, PostUncheckedUpdateWithoutTopicPostInput>
    create: XOR<PostCreateWithoutTopicPostInput, PostUncheckedCreateWithoutTopicPostInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTopicPostInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTopicPostInput, PostUncheckedUpdateWithoutTopicPostInput>
  }

  export type PostUpdateWithoutTopicPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPostsNestedInput
    imgPost?: ImgPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTopicPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    imgPost?: ImgPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ImgTopicPostUpsertWithWhereUniqueWithoutTopicPostInput = {
    where: ImgTopicPostWhereUniqueInput
    update: XOR<ImgTopicPostUpdateWithoutTopicPostInput, ImgTopicPostUncheckedUpdateWithoutTopicPostInput>
    create: XOR<ImgTopicPostCreateWithoutTopicPostInput, ImgTopicPostUncheckedCreateWithoutTopicPostInput>
  }

  export type ImgTopicPostUpdateWithWhereUniqueWithoutTopicPostInput = {
    where: ImgTopicPostWhereUniqueInput
    data: XOR<ImgTopicPostUpdateWithoutTopicPostInput, ImgTopicPostUncheckedUpdateWithoutTopicPostInput>
  }

  export type ImgTopicPostUpdateManyWithWhereWithoutTopicPostInput = {
    where: ImgTopicPostScalarWhereInput
    data: XOR<ImgTopicPostUpdateManyMutationInput, ImgTopicPostUncheckedUpdateManyWithoutTopicPostInput>
  }

  export type ImgTopicPostScalarWhereInput = {
    AND?: ImgTopicPostScalarWhereInput | ImgTopicPostScalarWhereInput[]
    OR?: ImgTopicPostScalarWhereInput[]
    NOT?: ImgTopicPostScalarWhereInput | ImgTopicPostScalarWhereInput[]
    id?: StringFilter<"ImgTopicPost"> | string
    imgUrl?: StringFilter<"ImgTopicPost"> | string
    filePath?: StringNullableFilter<"ImgTopicPost"> | string | null
    createdAt?: DateTimeFilter<"ImgTopicPost"> | Date | string
    updatedAd?: DateTimeFilter<"ImgTopicPost"> | Date | string
    topicPostId?: StringNullableFilter<"ImgTopicPost"> | string | null
  }

  export type TopicPostCreateWithoutImgTopicPostInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    post?: PostCreateNestedOneWithoutTopicPostInput
  }

  export type TopicPostUncheckedCreateWithoutImgTopicPostInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
    postId?: string | null
  }

  export type TopicPostCreateOrConnectWithoutImgTopicPostInput = {
    where: TopicPostWhereUniqueInput
    create: XOR<TopicPostCreateWithoutImgTopicPostInput, TopicPostUncheckedCreateWithoutImgTopicPostInput>
  }

  export type TopicPostUpsertWithoutImgTopicPostInput = {
    update: XOR<TopicPostUpdateWithoutImgTopicPostInput, TopicPostUncheckedUpdateWithoutImgTopicPostInput>
    create: XOR<TopicPostCreateWithoutImgTopicPostInput, TopicPostUncheckedCreateWithoutImgTopicPostInput>
    where?: TopicPostWhereInput
  }

  export type TopicPostUpdateToOneWithWhereWithoutImgTopicPostInput = {
    where?: TopicPostWhereInput
    data: XOR<TopicPostUpdateWithoutImgTopicPostInput, TopicPostUncheckedUpdateWithoutImgTopicPostInput>
  }

  export type TopicPostUpdateWithoutImgTopicPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutTopicPostNestedInput
  }

  export type TopicPostUncheckedUpdateWithoutImgTopicPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyUserInput = {
    id?: string
    countryName: string
    placeName: string
    zone?: string | null
    date?: Date | string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type AboutMeCreateManyUserInput = {
    id?: string
    year: number
    month: number
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    imgPost?: ImgPostUpdateManyWithoutPostNestedInput
    topicPost?: TopicPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    imgPost?: ImgPostUncheckedUpdateManyWithoutPostNestedInput
    topicPost?: TopicPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutMeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    topicAboutMe?: TopicAboutMeUpdateManyWithoutAboutMeNestedInput
  }

  export type AboutMeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    topicAboutMe?: TopicAboutMeUncheckedUpdateManyWithoutAboutMeNestedInput
  }

  export type AboutMeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicAboutMeCreateManyAboutMeInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type TopicAboutMeUpdateWithoutAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    imgTopicAboutMe?: ImgTopicAboutMeUpdateManyWithoutTopicAboutMeNestedInput
  }

  export type TopicAboutMeUncheckedUpdateWithoutAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    imgTopicAboutMe?: ImgTopicAboutMeUncheckedUpdateManyWithoutTopicAboutMeNestedInput
  }

  export type TopicAboutMeUncheckedUpdateManyWithoutAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgTopicAboutMeCreateManyTopicAboutMeInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgTopicAboutMeUpdateWithoutTopicAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgTopicAboutMeUncheckedUpdateWithoutTopicAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgTopicAboutMeUncheckedUpdateManyWithoutTopicAboutMeInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgPostCreateManyPostInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type TopicPostCreateManyPostInput = {
    id?: string
    nameTopic: string
    detail: string
    isDelete?: boolean
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgPostUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgPostUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgPostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicPostUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    imgTopicPost?: ImgTopicPostUpdateManyWithoutTopicPostNestedInput
  }

  export type TopicPostUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
    imgTopicPost?: ImgTopicPostUncheckedUpdateManyWithoutTopicPostNestedInput
  }

  export type TopicPostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameTopic?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgTopicPostCreateManyTopicPostInput = {
    id?: string
    imgUrl: string
    filePath?: string | null
    createdAt?: Date | string
    updatedAd?: Date | string
  }

  export type ImgTopicPostUpdateWithoutTopicPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgTopicPostUncheckedUpdateWithoutTopicPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImgTopicPostUncheckedUpdateManyWithoutTopicPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}