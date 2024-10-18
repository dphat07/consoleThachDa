import { localImages } from "@assets/images";
import Block from "@components/block";
import Button from "@components/button";
import Input from "@components/input";
import MainContainer from "@components/main-container";
import Text from "@components/text";
import { signInForm } from "@navigation/config/type";
import theme, { makeStyles } from "@theme";
import { EDGES } from "@utils/helper";
import { validateUser } from "@utils/validate";
import { LinearGradient } from "expo-linear-gradient";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { Image } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@components/context/auth-context";

function SignIn() {
  const styles = useStyle();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signInForm>({
    resolver: zodResolver(validateUser),
    mode: "onChange",
    defaultValues: {
      username: __DEV__ ? "" : "",
      password: __DEV__ ? "" : "",
    },
  });

  const { login } = useAuth();
  const handleLogIn = () => {
    login();
  };
  return (
    <MainContainer edges={EDGES.LEFT_RIGHT}>
      <LinearGradient
        colors={[
          theme.colors.bluePatelDC,
          theme.colors.bluePatelED,
          theme.colors.white,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
        style={styles.container}
      >
        <Block
          flex={1}
          justifyContent="center"
          mx="l"
          mt="_40"
          gap="_10"
          style={styles.content}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 144,
              height: 144,
              alignSelf: "center",
              marginBottom: 20,
            }}
            source={localImages().tdLogo}
          />
          <Block
            flex={0.8}
            backgroundColor={"background"}
            borderWidth={0}
            borderRadius={"m"}
          >
            <Text style={styles.headerText}>Đăng nhập</Text>
            <Text style={[styles.subHeaderText, { marginBottom: 15 }]}>
              Vui lòng đăng nhập để sử dụng ứng dụng
            </Text>
            {/* {msgErrorSignIn && (
                <Row my={'_20'} gap={'s'} style={styles.msgErrorContainer}>
                  <Icon
                    type='materialIcons'
                    name='error-outline'
                    size={18}
                    color={'red'}
                  />
                  <Text style={[styles.subHeaderText, { color: 'red' }]}>
                    {msgErrorSignIn}
                  </Text>
                </Row>
              )} */}
            <Block marginHorizontal={"_28"} gap={"_15"}>
              <Input
                name="username"
                label="Email"
                placeholder="Nhập email"
                labelStyle={styles.labelStyle}
                control={control}
                error={errors.username?.message}
                showError={!!errors.username?.message}
                errorStyle={styles.errorMessage}
              />
              <Input
                name="password"
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                labelStyle={styles.labelStyle}
                control={control}
                error={errors.password?.message}
                showError={!!errors.password?.message}
                errorStyle={styles.errorMessage}
                secureTextEntry={true}
              />
            </Block>
            <Button
              buttonStyle={styles.buttonStyle}
              label="Đăng nhập"
              textStyle={{ color: "white", fontWeight: "bold" }}
              onPress={handleLogIn}
              // onPress={handleSubmit(handleSignIn)}
              // isLoadding={submitting}
            />
          </Block>
        </Block>
      </LinearGradient>
    </MainContainer>
  );
}
export default memo(SignIn);

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  content: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  msgErrorContainer: {
    alignSelf: "center",
    backgroundColor: "rgba(228, 93, 93, 0.06)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 5,
  },
  headerText: {
    color: theme.colors.blueAF,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "900",
    paddingVertical: 20,
  },
  subHeaderText: {
    textAlign: "center",
    fontSize: 14,
    color: theme.colors.grey6C,
  },
  labelStyle: {
    fontSize: 12,
    color: theme.colors.grey6C,
    marginBottom: 2,
    paddingTop: 6,
  },

  buttonStyle: {
    marginHorizontal: 28,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.blueAF,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonGoogle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  errorMessage: {
    color: "red",
    marginTop: 5,
    fontSize: 12,
  },
}));
