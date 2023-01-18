import {Input, Text, Textarea} from '@/components/atoms'
import {FormLayout} from '@/wrappers'
import {FormButton} from '@/components/atoms'

const ToDoCreateForm = () => {
  return (
    <FormLayout formStyle='py-6 flex flex-col items-center'>
      <Text textStyle='text-[1.5rem] mb-2'>TO-DO 생성</Text>
      <Input
        inputStyle='m-2 w-[20rem] h-[2.5rem] rounded-[0.5rem] px-2 text-[12px]'
        type='text'
        placeholder='제목을 입력해주세요.'
      />
      <Textarea
        placeholder='내용을 입력하세요.'
        textareaStyle='w-[20rem] h-[5rem] resize-none rounded-lg px-2 py-4 text-[12px]'
      />
      <FormButton>등록</FormButton>
    </FormLayout>
  )
}

export default ToDoCreateForm
