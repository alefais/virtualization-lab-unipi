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
$ kubectl get pod
$ kubectl get pod --watch
$ kubectl get pod -o wide

$ kubectl get service

$ kubectl get secret
$ kubectl get all | grep mongodb
```

## Validate that each service has the right pod

### Use the following ```kubectl describe``` and ```kubectl logs``` debugging commands

```
$ kubectl describe pod mongodb-deployment-xxxxxx
$ kubectl describe service mongodb-service

$ kubectl logs mongo-express-xxxxxx

$ kubectl get deployment mongodb-deployment -o yaml > mongodb-deployment-result.yaml
$ kubectl get deployment mongoexpress-deployment -o yaml > mongodb-service-result.yaml
```

### Use the following command to give a URL to external service in ```minikube```

```
$ minikube service mongo-express-service
```

## Remove deployments

### Issue the following ```kubectl delete``` commands

```
$ kubectl delete -f mongodb-deployment.yaml

$ kubectl delete -f mongoexpress-deployment.yaml
```
