import { FormElements } from './FormElements';
import SidebarBtnElement from './SidebarBtnElement';

function FormElementsSidebar() {
  return (
    <div>
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
}

export default FormElementsSidebar;