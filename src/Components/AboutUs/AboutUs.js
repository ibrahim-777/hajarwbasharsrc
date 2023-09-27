import React from 'react'
import NavBar from './../Home/NavBar'
import Footer from './../Home/Footer'
import { Container } from 'reactstrap'
import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
export default function AboutUs() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  }
  return (
    <div>
      <NavBar/>
      <Container>
        
      </Container>
      <div className=' flex-row-reverse'>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem className='text-end'>
          <AccordionHeader className='text-end' targetId="1">ثورة 17 تشرين </AccordionHeader>
          <AccordionBody className='text-end' accordionId="1">
          ضمن فعاليات المولد النبوي الشريف ستقام جلسة  للإناث في حجر وبشر يتخللها حديث قصير عن بعض الصحابيات اللواتي أثرن في حياة الرسول ﷺ يتبعها جلسة ذكر للصلاة على النبي والتذكير بفضلها
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">أسباب التأسيس</AccordionHeader>
          <AccordionBody  className='text-end' accordionId="2">
          السلام عليكم ورحمة الله وبركاته
كما طرح سابقاً في الخطة المعدة لسنة الواحدة على البدأ استلام اشتراك شهري من الأعضاء لتمويل أنشطة المجموعة وبحسب قدرتنا على التمويل يقبل النشاط أو يرفض

لذلك يطلب من الأخوة الأعضاء تسديد المبلغ الشهري( لمن يستطيع ) وقدره 5$ أو ما يعادله في الليرة اللبنانية عبر حساب ويش لمسؤولة المالية إيمان ابو ليلى عبر الرقم : 76437488

عن شهر أيلول 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">أعمالنا</AccordionHeader>
          <AccordionBody accordionId="3">
          حملة سويّ هب حملة توعوية لمحاربة الشذوذ في طرابلس والمحافظة على السوية الجنسية للطبيعة البشرية.
الهدف منها: منع الترويج أو التسويق أو بيع أي منتجات تحتوي رموز للشذوذ مثل علم الشذوذ أو غيرها من الايحاءات.

الفئة المستهدفة: أصحاب المكتبات والمحلات التي تبيع السلع المدرسية  التي تحمل رموز للشذوذ الجنسي.

#حملة_سوي
#كرمال_ولادك_وولادنا_ماتبيع
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      </div>
      <Footer/>
    </div>
  )
}
