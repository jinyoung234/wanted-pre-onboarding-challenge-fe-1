import {CancelButton, CompleteButton, DeleteButton, Input, Label, ModifyButton, Textarea} from '@/components/atoms'
import {useDeleteTodo} from '@/queries'
import {FormInterface, ToDoInterface} from '@/types'
import {FormLayout} from '@/wrappers'
import React from 'react'
import {useForm} from 'react-hook-form'

interface ToDoBoardProps {
  handleViewDetailTodo: (id?: string | undefined) => void
  modify: boolean
  handleModifyTodo: () => void
  todoDetail: Pick<ToDoInterface, 'content' | 'title' | 'id'>
  handleValidModify: (modifyTodo: FormInterface) => void
}
const ToDoBoard = ({handleValidModify, todoDetail, modify, handleModifyTodo, handleViewDetailTodo}: ToDoBoardProps) => {
  const {handleSubmit, register} = useForm<FormInterface>()
  return (
    <div className='absolute left-[9rem] z-[1000] top-[10rem] bg-white w-[20rem] h-[14rem] rounded-md'>
      <FormLayout
        handleSubmit={handleSubmit(handleValidModify)}
        formStyle='flex flex-col items-center justify-center w-[100%] h-[100%] p-3'
      >
        <div className='w-full p-3'>
          <Label htmlFor='title' labelStyle='text-[14px]'>
            제목
          </Label>
          <Input
            defaultValue={todoDetail?.title}
            id='title'
            {...register(`title ${todoDetail?.id}`)}
            inputStyle='w-full my-2 h-[2rem] rounded-md px-2 text-[0.75rem] text-gray-500 border border-gray-300'
            placeholder=''
            disabled={!modify}
            type='text'
          />
          <Label htmlFor='content' labelStyle='text-[14px]'>
            내용
          </Label>
          <Textarea
            defaultValue={todoDetail?.content}
            id='content'
            {...register(`content ${todoDetail?.id}`)}
            placeholder=''
            disabled={!modify}
            textareaStyle='resize-none mt-2 w-full h-[4rem] rounded-[0.5rem] px-2 py-4 text-[12px] overflow-hidden border border-gray-300'
          />
        </div>
        <div className='w-full flex justify-center'>
          {modify ? (
            <>
              <div className='mr-1'>
                <CompleteButton />
              </div>
              <CancelButton handleModify={handleModifyTodo} />
            </>
          ) : (
            <>
              <div className='mr-1'>
                <ModifyButton handleModify={handleModifyTodo} />
              </div>
              <div className='mr-1'>
                <DeleteButton />
              </div>
              <CancelButton handleModify={handleViewDetailTodo} />
            </>
          )}
        </div>
      </FormLayout>
    </div>
  )
}

export default ToDoBoard
