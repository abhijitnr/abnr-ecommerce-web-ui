import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 40%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>ABNR</Logo>

        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alternation in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Description>

        <SocialContainer>
          <SocialIcon color="#3B5999">
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color="#E4405F">
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color="#55ACEE">
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color="#E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>

        <ContactItem>
          <LocationOnIcon
            style={{
              marginRight: "10px",
            }}
          />
          Hojai, Assam (INDIA)
        </ContactItem>
        <ContactItem>
          <PhoneIcon
            style={{
              marginRight: "10px",
            }}
          />
          +91 8011545825
        </ContactItem>
        <ContactItem>
          <EmailIcon
            style={{
              marginRight: "10px",
            }}
          />
          abhijitbiswas8859@gmail.com
        </ContactItem>

        <Payment src="https://www.pngitem.com/pimgs/m/47-479964_accepted-payment-types-payment-types-hd-png-download.png" />
      </Right>
    </Container>
  );
}

export default Footer;
