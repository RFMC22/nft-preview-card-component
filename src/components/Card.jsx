import { imageAvatar, imageCard, imageClock, imageEthereum, imageView } from "../assets"

const Card = ({nfts}) => {
  return (
    <div className="max-w-[350px] md:h-[596px] w-full h-[543px] rounded-[15px] bg-dark-blue-card shadow-[0_25px_50px_0_rgba(0_0_0_/_.10)] mx-[24px] px-[24px] pt-[24px] pb-[32px] flex flex-col items-center justify-between">
      <header className="border-dark-blue-line border-b-[1px] md:pb-[21px] pb-[13px]">
        <div className='relative overflow-hidden rounded-[8px] group'>
          <img src={imageCard} alt="image equilibrium" />
          <div className='hidden absolute top-0 left-0 bottom-0 right-0 bg-[hsla(178,100%,50%,.5)] w-full h-full group-hover:block cursor-pointer'>
            <img className='absolute mx-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={imageView} alt="image view" />
          </div>
        </div>
        <h1 className='text-[22px] text-white font-semibold mt-[24px] hover:text-cyan hover:cursor-pointer'>{nfts.name}</h1>
        <p className='text-[18px] text-soft-blue font-light leading-[26px] md:mt-[16px] mt-[12px]'>{nfts.text}</p>
        <div className="flex justify-between items-center md:mt-[22px] mt-[16px]">
          <div>
            <img className="inline-block text-[16px] pb-[2px]" src={imageEthereum} alt="logo ethereum" />
            <span className="text-cyan pl-[7px]">{nfts.price}</span>
          </div>
          <div>
            <img className="inline-block text-[16px] pb-[3px] pr-[7px]" src={imageClock} alt="logo clock" />
            <span className="text-soft-blue">{nfts.time}</span>
          </div>
        </div>
      </header>
      <footer className="w-full flex items-center gap-[16px] mt-[16px]">
        <img src={imageAvatar} alt="logo avatar" width={33} height={33} className="border border-white rounded-full"/>
        <p className="text-[16px] text-soft-blue">{nfts.created}<span className="text-white hover:text-cyan hover:cursor-pointer"> {nfts.user}</span></p>
      </footer>
    </div>
  )
}

export default Card