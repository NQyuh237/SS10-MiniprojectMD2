import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
      const listJob = useSelector((job) => job.todolist);
  return (
      <div>số lượng công việc là:{listJob.length}</div>
  )
}
