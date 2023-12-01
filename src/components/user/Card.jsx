import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({product}) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/user/product/${product._id}`)
    }

  return (
    <Card sx={{ maxWidth: 500 }} onClick={handleClick}>
      {product.images.length > 0 ? (
        <CardMedia
        sx={{ height: 140 }}
        image={product?.images[0]?.url}
        title="green iguana"
      />
      ):(null)}
      <CardContent>
          <Typography gutterBottom variant="h6" component="div" fontWeight={700}>
            {product.model}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <ol>
              <li><span className='font-bold'>Condition</span>:{product.condition}</li>
              <li><span className='font-bold'>Warranty</span>:{product.warranty}</li>
              <li><span className='font-bold'>Acessories</span>:{product.accessories}</li>
            </ol>
          </Typography>
        </CardContent>
      {/* <CardActions>
        <Link to={`/user/product/${product._id}`}><Button size="small">Learn More</Button></Link>
      </CardActions> */}
    </Card>
  );
}