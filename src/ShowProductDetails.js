import React, {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import pink from '@material-ui/core/colors/pink';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  },
  fabProgress: {
    color: pink[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: pink[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function ShowProductDetails(props) {
  const { id } = useParams();
  const product = props.products.find((p)=>(p.name===id));
  const addToCart=()=>{
    let cart=JSON.parse(localStorage.getItem('cart'));
    if(cart===null){
        cart=[];
    }
    cart.push(id);
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      addToCart();
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (

   product?( 
     <div> 
       <h3>שם: { product.name } </h3>
       <h5>מחיר: { product.price }</h5>
       <div className={classes.root}>
       <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          הוסף לסל
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
      <div className={classes.wrapper}>
        <Fab
          aria-label="save"
          color="primary"
          className={buttonClassname}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <AddShoppingCartIcon />}
        </Fab>
        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
      </div>
    </div>
   </div>  
   ):''
  )
}

export default ShowProductDetails;
