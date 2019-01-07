Add rook helm chart repo

```helm repo add rook-stable https://charts.rook.io/stable```


Install via helm chart

```helm install --namespace rook-ceph-system --name rook-ceph rook-stable/rook-ceph -f values.yaml```

Setup the storage cluster

```kubectl create -f cluster.yaml```

Create the storage pool and storageclass

```kubectl create -f storageclass.yaml```
