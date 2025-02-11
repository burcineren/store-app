import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
function BreadCrumbs({ name }: { name: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="capitalize text-lg">
            home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/product" className="capitalize text-lg">
            roduct
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        <BreadcrumbPage className="capitalize text-lg">{name}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbs;
