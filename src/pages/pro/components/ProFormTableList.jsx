import React from 'react';
import ProForm, {ModalForm} from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table'

const vendorList = []
for(let i = 0; i<100; i++){
  vendorList.push({
    id: `ID_${i}`,
    name: `供应商${i}`
  })
}


const ProFormTableList = (props)=>{

  const {visible, onVisibleChange} = props

  const handleSelect = (record) => {
    console.log('handleSelect', record)
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
    <ModalForm
      title='请选择供应商'
      visible={visible}
      onFinish={async (values)=>{
        console.log('ModalForm onFinish', values)
      }}
      onVisibleChange={onVisibleChange}
    >
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
        }}
        search={{
          layout: 'vertical',
          defaultCollapsed: false,
        }}
      />
    </ModalForm>
  )

}

export default ProFormTableList