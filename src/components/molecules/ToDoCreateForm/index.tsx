import {ErrorText, Input, Text, Textarea} from '@/components/atoms'
import {FormLayout, MainPageContext} from '@/wrappers'
import {FormButton} from '@/components/atoms'
import {useFormContext} from 'react-hook-form'
import {CreateToDoType} from '@/types'
import React from 'react'

const ToDoCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useFormContext<CreateToDoType>()
  const {
    todoList: {handleSubmitTodo},
  } = React.useContext(MainPageContext)
  return (
    <FormLayout handleSubmit={handleSubmit(handleSubmitTodo)} formStyle='py-6 flex flex-col items-center'>
      <Text textStyle='text-[1.5rem] mb-2'>TO-DO 생성</Text>
      <Input
        {...register('title')}
        inputStyle='m-2 w-[20rem] h-[2.5rem] rounded-[0.5rem] px-2 text-[12px]'
        type='text'
        placeholder='제목을 입력해주세요.'
      />
      {errors?.title && <ErrorText extraStyle='mb-2 ml-4' errorContent={errors?.title.message as string} />}
      <Textarea
        {...register('content')}
        placeholder='내용을 입력하세요.'
        textareaStyle='w-[20rem] h-[5rem] resize-none rounded-lg px-2 py-4 text-[12px]'
      />
      {errors?.content && <ErrorText extraStyle='mt-2 ml-4' errorContent={errors?.content.message as string} />}
      <FormButton>등록</FormButton>
    </FormLayout>
  )
}

export default ToDoCreateForm
