import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Attributes from "../../app/components/Attributes/attributes.component";
import Description from "../../app/components/Description/description.component";
import Loader from "../../app/components/Loader/loader.component";
import Map from "../../app/components/Map/map.component";
import PMI from "../../app/components/ProductMainInfo/pmi.component";
import UserInfo from "../../app/components/UserInfo/userInfo.component";
import { fetchProduct, productSelector } from "./product.slice";
import {
  PContent,
  ProductContent,
  PStyle,
  TabMenu,
  UserContent,
  TabSpan,
  DetailCOntainer,
} from "./product.styles";

function ProductPage() {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const { loading, hasErrors, product } = useSelector(productSelector);
  const { picture, name, description, investmentEffort, type, user, company } = product;
  const { address } = company || {}

  // const desc = {__html: description}

  return loading || hasErrors ? (
    <Loader />
  ) : Object.keys(product).length === 0 ? (
    <Loader />
  ) : (
    <PStyle>
      <PContent>
        <ProductContent>
          <img src={picture} alt={name} />
          <PMI name={name} investmentEffort={investmentEffort} type={type} />
          <TabMenu>
            <TabSpan
              active={tab === "desc" ? 1 : 0}
              onClick={() => setTab("desc")}
            >
              DESCRIPTION
            </TabSpan>
            <TabSpan
              active={tab === "attr" ? 1 : 0}
              onClick={() => setTab("attr")}
            >
              ATTRIBUTES
            </TabSpan>
          </TabMenu>
          {tab === "desc" ? (
            <DetailCOntainer>
              <Description description={description} />
            </DetailCOntainer>
          ) : (
            <DetailCOntainer>
              <Attributes />
            </DetailCOntainer>
          )}
        </ProductContent>
        <UserContent>
          <UserInfo user={user} />
          <Map address={address} />
        </UserContent>
      </PContent>
    </PStyle>
  );
}

export default ProductPage;
