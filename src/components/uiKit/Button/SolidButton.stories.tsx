import { SolidButton } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CrossIcon from "../Icons/CrossIcon";

export default {
    title: "uiKit/Button/SolidButton",
    component: SolidButton,
    argTypes: {
        text: {
            defaultValue: "Click me",
        },
        className: {
            table: {
                disable: true,
            },
        },
        type: {
            table: {
                disable: true,
            },
        },
        startIcon: {
            table: {
                disable: true,
            },
        },
        endIcon: {
            table: {
                disable: true,
            },
        },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof SolidButton>;

const Template: ComponentStory<typeof SolidButton> = args => <SolidButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const StartIcon = Template.bind({});
StartIcon.args = {
    startIcon: <CrossIcon className="w-4 h-4" />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
    endIcon: <CrossIcon className="w-4 h-4" />,
};
