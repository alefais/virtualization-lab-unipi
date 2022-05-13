# Cluster management with minikube

```
$ minikube start --driver=virtualbox      // optional for debug --v=7 --alsologtostderr
$ minikube status
$ minikube pause
$ minikube upause
$ minikube stop
$ minikube delete                         // deletes the local K8 cluster
```

# Create deployments and services and check cluster components status

## Apply configuration to pods and services

### Issue the following ```kubectl apply``` commands

```
$ kubectl apply -f mongo-secret.yaml
$ kubectl apply -f mongodb-deployment.yaml
$ kubectl apply -f mongodb-service.yaml

$ kubectl apply -f mongo-configmap.yaml
$ kubectl apply -f mongoexpress-deployment.yaml
$ kubectl apply -f mongoexpress-service.yaml
```

## Check the status of pods and services

### Use the following ```kubectl get``` commands

```
$ kubectl get nodes

$ kubectl get secret

$ kubectl get pod
$ kubectl get pod --watch
$ kubectl get pod -o wide

$ kubectl get service

$ kubectl get all               // optional: you can add something like to filter info | grep mongodb
```

## Validate that each service has the right pod

### Use the following ```kubectl describe``` and ```kubectl logs``` debugging commands

```
$ kubectl describe service mongodb-service
$ kubectl describe service mongoexpress-service

$ kubectl describe pod mongodb-deployment-xxxxxx

$ kubectl logs mongo-express-xxxxxx
```

## Configure the URL of the external service

### Use the following command to assign a URL to the external service in ```minikube```

```
$ minikube service --url mongo-express-service
```

## Remove deployments

### Issue the following ```kubectl delete``` commands

```
$ kubectl delete -f mongoexpress-deployment.yaml
$ kubectl delete -f mongoexpress-service.yaml

$ kubectl delete -f mongodb-deployment.yaml
$ kubectl delete -f mongodb-service.yaml

$ kubectl delete -f mongo-secret.yaml
$ kubectl delete -f mongo-configmap.yaml
```
