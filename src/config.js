export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://mchavarriae175:ACRumTZAopBBWd9m@cluster0.pcut5ti.mongodb.net/admin?retryWrites=true&loadBalanced=false&replicaSet=atlas-g43t9i-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";