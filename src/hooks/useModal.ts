import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../modules/comments/actions';

const useModal = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>(0);
  const [content, setContent] = useState<string>('');

  const dispatch = useDispatch();
  const deleteMessage = useCallback((messageId: number) => dispatch(deleteComment(messageId)), [dispatch]);

  const handleDelete = () => {
    setIsShowing(false);
    deleteMessage(deleteId);
  };

  const handleCancel = () => {
    setIsShowing(false);
  };

  const showingModal = (id: number, content: string) => {
    setIsShowing(true);
    setDeleteId(id);
    setContent(content);
  };

  return { isShowing, content, handleDelete, handleCancel, showingModal };
};

export default useModal;
