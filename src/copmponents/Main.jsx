import styled from "styled-components";
import Search from "./Search";
import ProductList from "./ProductList";
import { useRef, useState } from "react";

function Main() {
  
  const [products, setProducts] = useState([]);

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  const AddGoods = (ev) => {
    ev.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const newProduct = { name, description, price };
    const updetadProducts = [...products, newProduct];
    setProducts(updetadProducts);
  };
  return (
    <MainTag>
      <Search/>
      здесь будет форма добавления нового товара в массив в компоненте
      <AddForm onSubmit={AddGoods}>
        <NameInput ref={nameRef}></NameInput>
        <DescriptionInput ref={descriptionRef}></DescriptionInput>
        <PriceInput ref={priceRef}></PriceInput>
        <AddButton type="submit">ADD</AddButton>
      </AddForm>
      <ProductList />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  margin-bottom: auto;
`;
const AddForm = styled.form``;
const NameInput = styled.input``;
const DescriptionInput = styled.input``;
const PriceInput = styled.input``;
const AddButton = styled.button``;
