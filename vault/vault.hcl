storage "file" {
  path = "/tmp/vault/data"
}

listener "tcp" {
  address = "127.0.0.1:9200"
  tls_disable = 1
}
