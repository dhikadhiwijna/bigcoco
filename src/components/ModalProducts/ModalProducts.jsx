import React, { useContext, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { closeModal } from "../../Context/Action";
import { ContextStore } from "../../Context/ContextStore";
import * as S from "./ModalProducts-style";

const ModalProducts = (id) => {
  const { getProductId, getProductIdDispatch, ModalState, ModalDispatch } =
    useContext(ContextStore);

  console.log("Modal", id.id.data);
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

const UseOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because the passed-in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};
