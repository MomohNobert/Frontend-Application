import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../../app/components/Loader/loader.component";
import PMI from "../../app/components/ProductMainInfo/pmi.component";
import { fetchProduct, productSelector } from "./product.slice";
import { PContent, ProductContent, PStyle, UserContent } from "./product.styles";

function ProductPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    const { loading, hasErrors, product } = useSelector(productSelector);
    const { picture, name, description, investmentEffort, type } = product

    // const desc = {__html: description}

    return loading || hasErrors ? (
        <Loader />
    ) :
    (
        <PStyle>
            <PContent>
                <ProductContent>
                    <img src={picture} alt={name} />
                    <PMI name={name} investmentEffort={investmentEffort} type={type} />
                    {/* <p dangerouslySetInnerHTML={desc} /> */}
                </ProductContent>
                <UserContent>

                </UserContent>
            </PContent>
        </PStyle>
    )
}

export default ProductPage