import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from '@/shared/ui/atoms/Input';
import { Label } from '@/shared/ui/atoms/Label';

const meta = {
  title: 'shared/ui/atoms/Input',
  component: Input,
  tags: ['autodocs'],
  // Storybook Controls Addon에서 props를 제어할 수 있도록 설정
  argTypes: {
    error: {
      control: 'boolean',
      description: '입력 필드의 에러 상태를 설정합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '입력 필드를 비활성화합니다.',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드에 표시될 placeholder 텍스트입니다.',
    },
  },
  // 모든 스토리에 공통으로 적용될 args
  args: {
    error: false,
    disabled: false,
    placeholder: '텍스트를 입력하세요...',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="email-input">이메일 주소</Label>
      <Input type="email" id="email-input" {...args} />
    </div>
  ),
  args: {
    placeholder: 'user@example.com',
  },
};
