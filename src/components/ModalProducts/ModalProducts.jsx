import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ContextStore } from "../../Context/ContextStore";
import * as S from "./ModalProducts-style";

const ModalProducts = (id) => {
  const { ModalDispatch } = useContext(ContextStore);

  // console.log("Modal", id.id.data);
  const titleProduct = id.id.data[1];
  const idText = id.id.data[3];
  const packaging = id.id.data[4];
  const spec = id.id.data[5];

  return (
    <S.ModalSection>
      <S.ModalContainer>
        <S.ModalTextContainer>
          <S.ModalTimes>
            <FaTimes
              size={30}
              onClick={() => ModalDispatch("CLOSE_MODAL")}
              className="times"
            />
          </S.ModalTimes>
          <h4>{titleProduct}</h4>

          <h5>Product Description</h5>
          <p>{idText}</p>

          {spec.length !== 0 ? (
            <S.ModalTextContainer>
              <h5>Specification</h5>
              <p>{spec}</p>
            </S.ModalTextContainer>
          ) : null}

          {packaging.length !== 0 ? (
            <S.ModalTextContainer>
              <h5>Packaging</h5>
              <p>{packaging}</p>
            </S.ModalTextContainer>
          ) : null}
        </S.ModalTextContainer>
      </S.ModalContainer>
    </S.ModalSection>
  );
};

export default ModalProducts;
