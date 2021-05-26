import React from 'react';
import ProTable from '@ant-design/pro-table'

const vendorList = []
for(let i = 0; i<100; i++){
  vendorList.push({
    id: `ID_${i}`,
    name: `供应商${i}`
  })
}

const ProTableList = ({onSelect}) => {

  const handleSelect = (record) => {
    console.log('handleSelect', record)
    onSelect(record)
  }

  const vendorColumns = [
    {
      dataIndex: 'id',
      title: 'ID'
    },
    {
      dataIndex: 'name',
      title: '名称'
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record)=>[
        <a key='select' onClick={()=>handleSelect(record)}>选择</a>
      ]
    }
  ]

  return (
    <ProTable
      columns={vendorColumns}
      request={(params, sort, filter)=>{
        return Promise.resolve({
          data: vendorList,
          success: true,
        })
      }}
      rowKey='id'
      pagination={{
        showQuickJumper: true,
        pageSize: 10
      }}
      search={{
        layout: 'vertical',
        defaultCollapsed: false,
      }}
    />
  )
}

export default ProTableList