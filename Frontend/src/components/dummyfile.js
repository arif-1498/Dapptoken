<div className="container mt-5">
      <Card className="text-center">
        <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <strong>Brand:</strong> {product.brand}
          </Card.Text>
          <Card.Text>
            <strong>Price:</strong> ${product.price}
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {product.description}
          </Card.Text>
          <Card.Text>
            <strong>Category:</strong> {product.category}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>