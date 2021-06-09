import React from "react"
import styled from "styled-components"
import "./styles.scss"
import StartSection from "./sections/start"
import ParallaxImage from "./sections/image"
import BaseSection from "./sections/base-section"

export function EposProject() {
  return <Page>
    <StartSection />
    <ParallaxImage src="/images/epos/cover.png" />
    <BaseSection title="Задача">
      Школьники Пермского края используют в обучении образовательную систему
      Эпос.Школа. Но данная система далеко не совершенна: долгий запуск,
      медленная загрузка, проблемы с UX – все это делает опыт использования
      Эпоса крайне неприятным. Проект Эпос Next решает проблему, позволяя
      комфортно пользоваться электронным дневником.
    </BaseSection>
    <ParallaxImage src="/images/epos/mockup-1.jpg" />
    <BaseSection title="Удобство Использования">
      При разработке в приоритете стояло удобство использования сервиса. Вся
      необходимая информация находится на главном экране, не надо делать ни
      одного лишнего клика.
    </BaseSection>
    <ParallaxImage src="/images/epos/mockup-2.jpg" />
    <BaseSection title="Доступность">
      Разработан веб сайт с технологией PWA, мобильное приложение Android и IOS,
      desktop приложение для Windows и MacOs. Доступ в электронный дневник есть
      на любом устройстве.
    </BaseSection>
  </Page>
}

const Page = styled.main`
  font-family: "Montserrat", sans-serif;
`

