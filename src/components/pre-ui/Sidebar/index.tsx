"use client";
import Icon from "@/components/common/Icon";
import NavLinkButton from "@/components/common/button/NavLinkButton";
import Link from "next/link";
import TimeInSiteModal from "../modal/TimeInSiteModal";
import SmartModeModal from "../modal/SmartModeModal";
import DeviceModal from "../modal/DeviceModal";

const Sidebar = () => {
  return (
    <div className="w-[348px] flex flex-col gap-[24px] mt-[36px]">
      <Link href="/" className="pl-[47px]">
        <Icon name="logo" className="!w-auto !h-auto max-h-[36px] max-w-[208px]" />
      </Link>

      <div className="pl-[32px] flex flex-col gap-[8px]">
        <NavLinkButton to="/" label="Пользователи" icon="users" />
        <NavLinkButton to="/servers" label="Мои серверы" icon="server" />
        <NavLinkButton to="/links" label="Ссылки" icon="link" />
        <NavLinkButton to="/queries" label="Поисковые запросы" icon="search" />
        <DeviceModal />
        <TimeInSiteModal />
        <NavLinkButton to="/proxies" label="Прокси" icon="file-text" />
        <SmartModeModal />
      </div>
    </div>
  );
};
export default Sidebar;
