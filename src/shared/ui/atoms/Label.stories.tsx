import type { Meta, StoryObj } from '@storybook/nextjs';
import { Label } from './Label';
import { Input } from './Input';

// --- 기본 정보 설정 ---
// 👇 'satisfies'를 제거하고, meta 변수에 직접 타입을 지정합니다.
const meta = {
  title: 'shared/ui/atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '라벨에 표시될 텍스트 또는 React 노드입니다.',
    },
    htmlFor: {
      control: 'text',
      description: '연결할 input 요소의 id입니다. (접근성)',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- 스토리 목록 ---

export const Default: Story = {
  args: {
    children: '사용자 이름',
    htmlFor: 'username',
  },
};

export const PeerDisabled: Story = {
  name: 'With Disabled Input (peer-disabled)',
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-disabled">이메일 (자동으로 흐려짐)</Label>
      <Input
        type="email"
        id="email-disabled"
        placeholder="Email"
        disabled
        className="peer"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Input 컴포넌트에 `peer` 클래스를 추가하면, Input이 `disabled` 상태가 될 때 `htmlFor`로 연결된 Label의 스타일이 `peer-disabled` 선택자에 의해 자동으로 변경됩니다.',
      },
    },
  },
};
