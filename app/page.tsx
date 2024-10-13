import AddFileIcon from "@/public/Icon/AddFileIcon";
import AddIcon from "@/public/Icon/AddIcon";
import AddServices from "@/public/Icon/AddServices";
import AddUserIcon from "@/public/Icon/AddUserIcon";
import AdmissionIcon from "@/public/Icon/AdmissionIcon";
import AgentsIcon from "@/public/Icon/AgentsIcon";
import AgentsLogo from "@/public/Icon/AgentsLogo";
import AllAgentsIcon from "@/public/Icon/AllAgentsIcon";
import AppointmentIcon from "@/public/Icon/AppointmentIcon";
import ApprovedIcon from "@/public/Icon/ApprovedIcon";
import ArrowButtonIcon from "@/public/Icon/ArrowButtonIcon";
import AvailableBalanceIcon from "@/public/Icon/AvailableBalanceIcon";
import BackArrow from "@/public/Icon/BackArrow";
import BedIcon from "@/public/Icon/BedIcon";
import BedSticker from "@/public/Icon/BedSticker";
import BillingIcon from "@/public/Icon/BillingIcon";
import BillingInsurances from "@/public/Icon/BillingInsurances";
import BoxIcon from "@/public/Icon/BoxIcon";
import CalanderIcon from "@/public/Icon/CalanderIcon";
import CallLogIcon from "@/public/Icon/CallLogIcon";
import CancelScheduleIcon from "@/public/Icon/CancelScheduleIcon";
import CardPayment from "@/public/Icon/CardPayment";

const icons: any = [
  {
    icon: AddFileIcon,
  },
  {
    icon: AddIcon,
  },
  {
    icon: AddServices,
  },
  {
    icon: AddUserIcon,
  },
  {
    icon: AdmissionIcon,
  },
  {
    icon: AgentsIcon,
  },
  {
    icon: AgentsLogo,
  },
  {
    icon: AllAgentsIcon,
  },

  {
    icon: AppointmentIcon,
  },
  {
    icon: ApprovedIcon,
  },
  {
    icon: ArrowButtonIcon,
  },
  {
    icon: AvailableBalanceIcon,
  },
  {
    icon: BackArrow,
  },

  {
    icon: BedIcon,
  },
  {
    icon: BedSticker,
  },
  {
    icon: BillingIcon,
  },
  {
    icon: BillingInsurances,
  },
  {
    icon: BoxIcon,
  },
  {
    icon: CalanderIcon,
  },
  {
    icon: CallLogIcon,
  },
  {
    icon: CancelScheduleIcon,
  },
  {
    icon: CardPayment,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
  {
    icon: AddFileIcon,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-8 gap-4 p-4">
      {icons.map((data: any, index: any) => (
        <div key={index}>
          <data.icon />
        </div>
      ))}
    </div>
  );
}
