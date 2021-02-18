import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import Modal from 'react-native-modal';
import Quiz from '../../Quiz';

export interface handleModalQuiz {
  openModalQuiz: () => void;
}

const PopupQuiz: React.ForwardRefRenderFunction<handleModalQuiz> = (
  props,
  ref,
) => {
  const [open, setOpen] = useState(false);

  const openModalQuiz = useCallback(() => {
    setOpen(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModalQuiz,
    };
  });

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Modal
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 0,
      }}
      isVisible={open}
      animationIn="slideInUp"
      onBackdropPress={onClose}
    >
      <Quiz />
    </Modal>
  );
};

export default forwardRef(PopupQuiz);
