'use client'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import React from 'react'

interface ConfirmModalProps {
  children: React.ReactNode
  onConfirm: ()=>void

}

export function ConfirmModal ({children,onConfirm}:ConfirmModalProps){
  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
    e.stopPropagation()
    onConfirm()
  }
  return(
  <AlertDialog>
      <AlertDialogTrigger onClick={(e)=>e.stopPropagation()} asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent onClick={e=>e.stopPropagation()}>
        <AlertDialogHeader onClick={e=>e.stopPropagation()}>
           <AlertDialogTitle>
            Are you Absolutely sure ?
          </AlertDialogTitle> 
          <AlertDialogDescription>
            This Action can't be revert !!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter onClick={e=>e.stopPropagation()}>
          <AlertDialogCancel onClick={e=>e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className='hover:bg-rose-600' onClick={handleConfirm}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )

}
