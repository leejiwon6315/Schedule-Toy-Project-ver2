import { useState, useCallback } from "react";
import InputBox from "./InputBox";
import style from "./InputButtonStyle.module.scss";
import { DataProps } from "../../Context";

const InputButton: React.FC<DataProps> = ({ addData, allData }) => {
  const [modalState, setModalState] = useState<boolean>(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = useCallback(() => {
    setModalState(false);
  }, []);

  return (
    <>
      <div onClick={openModal} className={style.input_button}>
        + &nbsp; 일정 추가 &nbsp;
      </div>
      <InputBox
        modalState={modalState}
        closeModal={closeModal}
        addData={addData}
        allData={allData}
      />
    </>
  );
};

export default InputButton;
