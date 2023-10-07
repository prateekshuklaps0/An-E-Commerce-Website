import { Box, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  src: string;
  title: string;
  price: number;
   brand : string;
}

export default function ProductSlider() {
  const NextArrow: React.FC<{ className?: string; onClick?: () => void }> = ({
    className,
    onClick,
  }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIcon boxSize={6} />
      </div>
    );
  };

  const PrevArrow: React.FC<{ className?: string; onClick?: () => void }> = ({
    className,
    onClick,
  }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIcon boxSize={6} />
      </div>
    );
  };

  const settings = {
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  let data: Product[] = [
    {
        src:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/0/tr:w-480,/f0926b2NK_THEBW00009956_1.jpg?rnd=20200526195200",
        title:"Ardor Edition Men Pink Acid Wash Slim Fit Cotton Casual Tracksuit",
        price: 2984,
        brand :"The Bear House"
      },
      {
        src:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/6/tr:w-480,/3661d58EA264_1.jpg?rnd=20200526195200",
        title:"Big Blue Bomber Jacket",
        price: 12356,
        brand : "Soup by Sougat Paul"
      },
      {
        src:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/2/tr:w-480,/8261202SP3860M_1.jpg?rnd=20200526195200",
        title:"Zahra Co-Ord",
        price: 9500,
         brand: "Esha Amiin Label"
        
      },
      {
        src:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/6/tr:w-480,/a6f1091Dashndot-M209210_1.jpg?rnd=20200526195200",
        title:"Tonal Blue Printed",
        price: 6980,
        brand : "Dash and Dot"
      },
      {
        src:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/0/tr:w-480,/f0926b2NK_THEBW00009959_1.jpg?rnd=20200526195200",
        title :"Ardor Edition Men Black Printed Slim Fit Cotton Casual Tracksuit ",
        price: 2594,
        brand :"The Bear House"
  
      },
      {
        src:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/e/tr:w-480,/de45792HKMCS41_1.jpg?rnd=20200526195200",
        title:"Navy Blue Linen Co-ord",
        price: 13320,
        brand : "Echke"
      },
      {
        src:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/9/tr:w-480,/7972eebJAVINTDS09_1.jpg?rnd=20200526195200",
        title :"Brown and Grey Slim Fit Premium Tie Dye Rayon Shirt",
        price: 4099,
         brand :"JAVINISHKA"
      },
      {
        src:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/1/tr:w-480,/f16d918NYKF_LIKAA00002067_1.jpg?rnd=20200526195200",
        title:"Indigo Saga Cotton Flex White Solid Full Sleeves Shirt With Doll",
        price: 1600,
        brand : "Likha by Nykaa Fashion"
      }
  ];

  return (
    <Box className="product" ml="150px" width="80%" >
      <Slider {...settings}>
        {data.map((item: Product, i: number) => (
          <Box key={i} padding="20px">
            <img src={item.src} alt={item.title} style={{ borderRadius: "20px" }} />
               <Heading as="h6" size="sm" p={"4px"}>Brand: {item.brand}</Heading>
            <Heading as="h6" size="sm" p={"4px"}>
             Name: {item.title}
            </Heading>
            <Heading as="h6" size="sm" color="gray.500" p={"4px"}>
             Price: ₹{item.price}
            </Heading>
             
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
