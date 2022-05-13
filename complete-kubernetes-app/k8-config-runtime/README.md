## Check runtime configuration

### Use the following ```kubectl get``` commands to generate the ```yaml``` files with the actual deployment status

```
$ kubectl get deployment mongodb-deployment -o yaml > mongodb-deployment-result.yaml

$ kubectl get deployment mongo-express -o yaml > mongoexpress-deployment-result.yaml

$ kubectl get service mongodb-service -o yaml > mongodb-service-result.yaml

$ kubectl get service mongo-express-service -o yaml > mongoexpress-service-result.yaml
```

The output files generated with these commands can be found in the current directory.
