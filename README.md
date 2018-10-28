# fetch

good boy.

### Endpoints

- `POST /api/spot`

Search for a dog breed

- Body
  - data: Base64 String

```
{
    data: "data:image/jpeg;base64,/9j/4R8wRXhpZgAA........"
}
```

_returns_

```
{
    "url": "https://res.cloudinary.com/...."
}
```

---

- `GET /api/woof`

Get all woofs

```
{
    "woofs": [
        {
            "timestamp": "2018-10-27T01:20:46.745Z",
            "_id": "5bd3bd9de59f24616f728a9c",
            "src": "https://res.cloudinary.com/....",
        },
        {
            "timestamp": "2018-10-27T01:20:46.745Z",
            "_id": "5bd3bd8de59f24616f728a9b",
            "src": "https://res.cloudinary.com/....",
        }
    ]
}
```
