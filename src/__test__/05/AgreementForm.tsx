import React, { useId, useState } from 'react'
import { Agreement } from './Agreement'
import { InputAccount } from './InputAccount'

type AgreementFormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const AgreementForm = (props: AgreementFormProps) => {
  const [checked, setChecked] = useState(false)
  const headingId = useId()
  return (
    <form aria-labelledby={headingId} onSubmit={props.onSubmit}>
      <h2 id={headingId}>新規アカウント登録</h2>
      <InputAccount />
      <Agreement
        onChange={(event) => {
          setChecked(event.currentTarget.checked)
        }}
      />
      <div>
        <button disabled={!checked}>サインアップ</button>
      </div>
    </form>
  )
}