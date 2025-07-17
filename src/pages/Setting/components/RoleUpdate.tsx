import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { GetUserResponse } from 'apis/types/user';
import {
  RoleUpdateContainer,
  InputRow,
  NicknameInput,
  SubmitButton,
  contentHeader,
} from './RoleUpdate.style';
import { Modal } from '@components/index';
import { nicknameText } from '../Setting.style';

const RoleUpdate = ({ profile }: { profile: GetUserResponse }) => {
  const { setValue, watch, register } = useFormContext();
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  useEffect(() => {
    if (profile?.nickname) {
      setValue('nickname', profile.nickname);
    }
  }, [profile?.nickname, setValue]);

  const handleUpdateNickname = () => {
    const nickname = watch('nickname');
    if (nickname) {
      setValue('nickname', nickname);
    }
    setIsWithdrawModalOpen(false);
  };

  return (
    <div css={RoleUpdateContainer}>
      <div css={contentHeader}>닉네임 변경</div>
      <div css={InputRow}>
        <input
          css={NicknameInput}
          {...register('nickname')}
          placeholder="닉네임을 입력하세요"
        />
        <button type="button" css={SubmitButton} onClick={() => setIsWithdrawModalOpen(true)}>닉네임 변경하기</button>
      </div>
      {isWithdrawModalOpen && (
        <Modal
          title="메인 역할을 변경할까요?"
          message={
            <>
              메인 역할을 변경할 경우, 닉네임 또한{" "}
              <span css={nicknameText}>
                {profile?.nickname}
              </span>
              에서 새로운 닉네임으로 변경됩니다.
            </>
          }
          confirmType='normal'
          confirmButton='변경하기'
          onConfirm={handleUpdateNickname}
          onCancel={() => setIsWithdrawModalOpen(false)} >

        </Modal>
      )}
    </div>
  );
};

export default RoleUpdate;