# gRPC demo v3 - client (nodejs)

This repo is a gRPC client running on node.js.

The [server](https://github.com/kdaisho/grpc-demo-v3-server) is implemented with Deno [gRPC community library](https://deno.land/x/grpc_basic@0.4.6).

## Calling services

Instal dependencies

```
npm i
```

### Create a todo

```
node client "take a walk"
```

### List todos

```
node client
```
