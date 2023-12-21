function Input({
  linkId,
  handleRadioChange,
  value,
  title,
  name,
  color="bg-transparent"
}) {
  return (
    <>
    <label htmlFor={linkId} className="sidebar-label-container block relative text-xs sm:text-[16px] ps-[20px] sm:ps-[35px] mb-1 sm:mb-[12px] cursor-pointer">
      <input onChange={handleRadioChange} type="radio" id={linkId} className="hidden" value={value} name={name}/>
      <span className={`check-mark absolute top-0 left-0 h-[15px] sm:h-[20px] w-[15px] sm:w-[20px] ${color} rounded-[50%]`}></span>{title}
    </label>
    </>
  )
}

export default Input