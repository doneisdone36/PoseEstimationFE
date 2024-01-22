import { Divider, Stack } from "@mui/material"
import React, { useState } from "react"
import SigningTyphography, { SigningTyphographyType } from "../../../../common/signing-common/signing-typhography";
import SigningInput, { SigningInputType } from "../../../../common/signing-common/signing-input";
import SigningButton from "../../../../common/signing-common/signing-button";

export interface RegisterData {
    name: string
    age: string,
    weight: string,
}

function InputUserInfoFormComponenet(): JSX.Element  {
    const [username , setUserName] = useState('');
    const [age, setUserAge] = useState('');
    const [weight, setUserWeight] = useState('');
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const registerData: RegisterData = {
            name : username,
            age: age,
            weight: weight
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Stack direction="column" display="flex" alignItems="center" spacing={3}>
                <Stack direction="row" justifyContent="space-between" width="100%">
                    <SigningTyphography variant='h5' fontWeight={550} color="#515151" text="회원 정보 "/>
                </Stack>
                <SigningInput label="이름" type={SigningInputType.ID} onChange={(e) => setUserName(e.target.value)} />
                <SigningInput label="나이" type={SigningInputType.ID} onChange={(e) => setUserAge(e.target.value)} />
                <SigningInput label="몸무게" type={SigningInputType.PASSWORD} onChange={(e) => setUserWeight(e.target.value)} />
                <SigningButton text="등록" type="submit"/>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <SigningTyphography color="#515151" text="사용 방법에 대해 궁금하신가요?"/>
                    <SigningTyphography type={SigningTyphographyType.HYPERLINK} fontWeight="light" color="primary" text="문의하기" link="/register"/>
                </Stack>
                <Divider sx={{  color: '#828282', width: '100%' }}>
                    추가적으로 등록
                </Divider>
                <SigningButton text="근육량" backgroundColor="#D0D0D0" />
            </Stack>
        </form>            
    )
}

const InputUserInfoForm = React.memo(InputUserInfoFormComponenet);
export default InputUserInfoForm
