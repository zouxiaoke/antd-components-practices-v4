import React, {useState, useRef} from 'react';
import { Form, message, Modal, Select,Divider, Input } from 'antd';
import ProForm, { ProFormText, ProFormSelect, ProFormDependency } from '@ant-design/pro-form';
// import ProFormTableList from '../components/ProFormTableList'
import ProTableList from '../components/ProTableList'
import { IdcardTwoTone, SearchOutlined } from '@ant-design/icons';
import { transpileModule } from 'typescript';



const { Option } = Select;

const SelectForm = ()=>{

  const [optionVisible, setOptionVisible] = useState(true)
  const [selectValue, setSelectValue] = useState('')

  const [optionList, setOptionList] = useState([])

  const selectRef = useRef()

  const handleOk = () => {
    console.log('handleOk');
    setOptionVisible(false)
  }
  const handleCancel = ()=>{
    console.log('handleCancel');
    setOptionVisible(false)
  }

  const handleSelect = (record) => {
    console.log('handleSelect', record);
    const {id='', name=''}=record
    setSelectValue(id)
    setOptionVisible(false)
    setOptionList([
      {
        label: name,
        value: id,
      }
    ])
  }

  const handleDropDownVisible = (value)=>{
    console.log('handleDropDownVisible',value);
  }


  const showSearch = ()=>{
    setOptionVisible(true)
  }
  function handleChange(value) {
    console.log('handleChange',value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }

  const handleClick = ()=>{
    console.log('handleClick');
    setOptionVisible(true)
  }

  const handleFocus = (value) => {
    console.log('handleFocus', value);
  }

  return (
    <ProForm
      onFinish={async (values)=>{
        console.log('values', values)
      }}
      initialValues={{
        // select:selectValue
      }}
    >
      <ProFormText
        width='md'
        name='name'
        label='名称'
      />
      <Form.Item
        label='下来搜索'
        name='modalSelect'
      >
        <Input
          style={{ width: 480 }}
          onClick={handleClick}
        />
        <Modal
          title='Pro Table Form in it'
          centered
          visible={optionVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <ProTableList onSelect={handleSelect} />
        </Modal>
      </Form.Item>

      {/* <Form.Item
        label='下拉搜索'
        name='searchSelect'
      >
        <Select
          style={{ width: 1024 }}
          // ref={selectRef}
          onChange={handleChange}
          placeholder="custom dropdown render"
          onDropdownVisibleChange={handleDropDownVisible}
          dropdownRender={menu=>{
            console.log('dropdownRender', menu)
            return (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <ProTableList onSelect={handleSelect} />
              </div>
            )
          }}
        >
          {
            optionList.map(it=>{
              const {value='', label=''} = it
              return <Option key={value} value={value}>{label}</Option>
            })
          }
        </Select>


      </Form.Item> */}

      {/* <ProFormText
        width='md'
        name='select'
        label='从弹出框中选择'
        fieldProps={{
          onClick: ()=>{
            console.log('onClick')
            setOptionVisible(true)
          },
          value: selectValue,
          onChange: (value, option)=>{
            console.log('onChange', value, option)
          }
        }}
      />
      <Modal
        title='Pro Table Form in it'
        centered
        visible={optionVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <ProTableList onSelect={handleSelect} />
      </Modal> */}
        {/* <ProFormTableList visible={optionVisible} onVisibleChange={setOptionVisible} /> */}
    </ProForm>
  )
}

export default SelectForm