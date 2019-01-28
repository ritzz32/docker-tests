### dev-shared
#### Install

```helm install --namespace dev-shared -n consul-dev-shared -f values.dev-shared.yaml ../../consul-helm```

#### Upgrade

```helm upgrade -f values.dev-shared.yaml consul-dev-shared ../../consul-helm```

### dev-test
#### Install

```helm install --namespace dev-test -n consul-dev-test -f values.dev-test.yaml ../../consul-helm```

#### Upgrade

```helm upgrade -f values.dev-test.yaml consul-dev-test ../../consul-helm```


### UI port forward
```kubectl port-forward svc/consul-dev-test-ui -n dev-test 8500:80```
