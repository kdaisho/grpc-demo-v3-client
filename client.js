const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const todo = process.argv[2] || "";

const client = new todoPackage.TodoList(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

if (todo) {
  client.CreateTodo({ todo }, async (err, response) => {
    if (err) {
      console.error("Error =>", err);
    }
    console.log("created 🚀", response);
  });
} else {
  client.ListTodo(null, async (err, response) => {
    if (err) {
      console.error("Error =>", err);
    }
    console.log(response);
  });
}

client.close();
