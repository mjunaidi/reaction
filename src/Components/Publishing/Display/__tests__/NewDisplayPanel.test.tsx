import { targetingData } from "Components/Publishing/Display/DisplayTargeting"
import { NewDisplayPanel } from "Components/Publishing/Display/NewDisplayPanel"
import { StandardArticle } from "Components/Publishing/Fixtures/Articles"
import { mount } from "enzyme"
import "jest-styled-components"
import React from "react"
import renderer from "react-test-renderer"

import { StandardArticleHostedAdPanel } from "../../Fixtures/Components"
// tslint:disable: jsx-boolean-value

describe("snapshot", () => {
  it("renders the new canvas in standard layout", () => {
    const component = renderer
      .create(
        <NewDisplayPanel
          adDimension={StandardArticleHostedAdPanel.adDimension}
          adUnit={StandardArticleHostedAdPanel.adUnit}
          displayNewAds={true}
          targetingData={targetingData(StandardArticle.id, "article")}
        />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

describe("data", () => {
  it("renders the component with the correct data and properties in standard layout articles", () => {
    const panel = mount(
      <NewDisplayPanel
        adDimension={StandardArticleHostedAdPanel.adDimension}
        adUnit={StandardArticleHostedAdPanel.adUnit}
        displayNewAds={true}
        targetingData={targetingData(StandardArticle.id, "article")}
      />
    )

    expect(panel.props().adDimension).toEqual("300x250")
    expect(panel.props().adUnit).toEqual("Desktop_RightRail1")
    expect(panel.props().displayNewAds).toBe(true)
  })
})
