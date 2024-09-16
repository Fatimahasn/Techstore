import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import ProductGridItem from 'components/eCommerce/ProductGridItem';
import {getAllProducts} from 'actions';
import { getAllCategories } from 'actions';
import { userSignIn } from 'actions';
import CardLayout from 'components/CardLayout';
import MediaCard from '../components/Cards/Media';
import WidgetHeader from 'components/WidgetHeader';
import Photos from 'components/profile/Photos';
import GalleryCard from 'components/Category/Card';
function TechStore (props){
  const [isloaded, setIsloaded]=useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const location=useLocation();
  useEffect(()=>{
    if(isloaded!==true){
      props.getAllProducts();
      props.getAllCategories();
      setProducts(props.items);
      setCategories(props.categoriesList);
    }  
  },[])

    return(
        <div className="app-wrapper mt-5">
          <div className="bg-white h-25 mb-5">
            <GalleryCard photoList={props.categoriesList}/>
            {/* {props.categoriesList.map((value,index)=><ProductGridItem key={index} product={value}/>)} */}

          </div>
        {/* <ContainerHeader title={<IntlMessages id="pages.samplePage"/>}/> */}
        <div className="d-flex justify-content-center">
          {props.items.map((value,index)=><ProductGridItem key={index} product={value}/>
          )
          }
          
        </div>
      </div>
    )
}
const mapStateToProps = ({settings, auth, products, categories}) => {
    const {sideNavColor, locale, isDirectionRTL} = settings;
    const {authUser, initURL} = auth;
    const {items} = products;
    const{categoriesList}=categories;
    return {sideNavColor, locale, isDirectionRTL, authUser, initURL, items,categoriesList}
  };
  
  export default connect(mapStateToProps,{getAllProducts, getAllCategories,userSignIn})(TechStore);