import NextImage, { ImageProps } from 'next/image';
import { basePath } from '@/next.config'; // Importa o basePath

const CustomImage = (props: ImageProps) => {
  // Adiciona o basePath ao src se ele existir e o src for um caminho relativo
  const finalSrc = basePath && typeof props.src === 'string' && props.src.startsWith('/')
    ? `${basePath}${props.src}`
    : props.src;

  return <NextImage {...props} src={finalSrc} />;
};

export default CustomImage;