import { TouchableOpacityProps } from "react-native";
import { Button, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    variant?: "outline" | "solid",
    color: string,
    textColor?: string,
}

export default function ButtonComponent({ children, variant, color, textColor, ...props }: ButtonProps) {
    return (
        <Button
            {...props}
            style={[
                props.style,
                {
                    backgroundColor: variant == "outline" ? "transparent" : color
                }
            ]}
        >
            <ButtonText
                style={{
                    color: variant == "outline" ? color : (textColor || "#000")
                }}
            >
                { children }
            </ButtonText>
        </Button>
    );
}