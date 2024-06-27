import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EditOutlined,
} from "@ant-design/icons";

export const QuoteComponent = () => {
  return (
    <div className='flex w-full justify-end lg:w-1/2'>
      <div className='flex w-[100%] flex-col bg-[#0A1019] p-12 lg:w-[80%]'>
        <div className='info-text'>Get Free Quote</div>

        <div className='text-[28px] font-bold text-white'>
          Drop Us a Message
        </div>

        <form>
          <div className='relative'>
            <UserOutlined className='absolute bottom-0 top-0 cursor-pointer text-lg text-white' />

            <input
              type='text'
              defaultValue='true'
              className='w-full border-b border-gray-opacity bg-transparent p-4 py-8 pl-8 font-bold text-white'
            />
          </div>

          <div className='relative'>
            <PhoneOutlined className='absolute bottom-0 top-0 cursor-pointer text-lg text-white' />

            <input
              type='text'
              defaultValue='true'
              className='w-full border-b border-gray-opacity bg-transparent p-4 py-8 pl-8 font-bold text-white'
            />
          </div>

          <div className='relative'>
            <MailOutlined className='absolute bottom-0 top-0 cursor-pointer text-lg text-white' />

            <input
              type='text'
              defaultValue='true'
              className='w-full border-b border-gray-opacity bg-transparent p-4 py-8 pl-8 font-bold text-white'
            />
          </div>

          <div className='relative flex items-center'>
            <EditOutlined className='absolute top-8 cursor-pointer text-lg text-white' />

            <textarea
              defaultValue='Message'
              className='w-full border-b border-gray-opacity bg-transparent p-4 py-8 pl-8 font-bold text-white'
            />
          </div>

          <button className='mt-10 h-[60px] w-full bg-primary-color text-[16px] font-bold duration-500 ease-in hover:border hover:border-primary-color hover:bg-transparent hover:text-primary-color'>
            Send Us Message
          </button>
        </form>
      </div>
    </div>
  );
};
