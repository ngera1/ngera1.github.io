---
title: "MRI Reconstruction with Physics-Informed Conformal Calibration"
type: project
# Keeps the page off the live site until you're ready. Preview with `hugo server -D -M`
# (-M keeps drafts out of docs/), then set to false and rebuild. Served at /mr-phicc/.
draft: false
# Used for search engines and link previews
description: "MRI reconstruction methods like unrolled optimizers use the underlying physics to inform the reconstruction, but what about using that information to inform uncertainty bounds? We present MR-PhICC for uncertainty quantification conditioned on reconstruction intermediates."
keywords: ["MRI", "uncertainty quantification"]
# Set to true to render LaTeX: $inline$, \(inline\), $$display$$, \[display\]
math: false

# Markdown allowed. Remove the line to hide it.
venue: "Poster at i2i Workshop 2026"

authors:
  - name: "Nora Gera"
    url: "/"
    affiliations: [1]
  - name: "Cassandra Tong Ye"
    url: "https://cassandra-t-ye.github.io/"
    affiliations: [1]
    # equal: true   # marks equal contribution with *
  - name: "Kristina Monakhova"
    url: "https://kristinamonakhova.com/kristina/"
    affiliations: [1]

affiliations:
  - "Cornell University, Department of Computer Science"

# Buttons under the title. `url` can be a link or a file in this folder (e.g. poster.pdf).
# Leave `url` empty to show a greyed-out "(soon)" button. Icons: https://fontawesome.com/icons
# (e.g. "fas fa-file-pdf", "fab fa-github", "fab fa-youtube") or "ai ai-arxiv" for arXiv.
links:
  - name: "Poster"
    url: "poster.pdf"
    icon: "fas fa-file-pdf"
  - name: "Arxiv"
    url: ""
    icon: "ai ai-arxiv"

# Image or video (.mp4/.webm) in this folder, shown under the title
teaser:
  src: "teaser.png"
  alt: "Diagram of qVarNet with quantile conditioning. Undersampled k-space passes through a chain of cascades, each a neural-network regularizer with a data-consistency (DC) step, alongside a sensitivity map estimator. A quantile sampled from a distribution modulates every layer of the regularizers. The network outputs upper-bound, median and lower-bound knee reconstructions, which are compared with the ground truth through the quantile loss and back-propagated during training."
  caption: "**Physics-based uncertainty quantification for MRI reconstruction:** We propose a new method of uncertainty quantification conditioned on the measurement and reconstruction intermediates."

# Uncomment once there's something to cite
# bibtex: |
#   @misc{gera2026mrphicc,
#     author = {Gera, Nora and TODO},
#     title  = {Quantifying Uncertainty with {MR-PhICC}},
#     year   = {2026},
#   }
---

{{% project-section title="Purpose" %}}
With the rise of powerful machine learning priors in MRI reconstruction, enhancing performance inadvertently risks introducing hallucinations, or plausible, nonexistent artifacts. Uncertainty quantification methods, like conformal prediction, can help by augmenting the model reconstruction with calibrated upper and lower bounds that provide statistical guarantees on its uncertainty. Recent work applies conformal calibration to accelerated MRI, showing predicted uncertainty maps are correlated with reconstruction errors. <b>However, uncertainty maps are predicted by a downstream module without access to the original frequency-domain measurement, which may result in larger, less physically informed uncertainty intervals.</b> To address this, we propose MRI reconstruction with Physics-Informed Conformal Calibration, MR-PhICC (pronounced <i>morphic</i>), a physics-informed model that parametrizes uncertainty in the reconstruction from k-space measurement.
{{% /project-section %}}

{{% project-section title="Background" %}}
{{< project-figure src="motivation.png" alt="Comparison of two existing approaches to uncertainty quantification in MRI reconstruction. Left, deep learning only (im2im): a network maps the measurement to a median image plus 5% lower-bound and 95% upper-bound images, which give an uncertainty map; methods like CNNs or transformers are not physics-based. Right, physics-based (Pixelwise UQ): an E2E-VarNet with a sensitivity map estimator and data-consistency blocks reconstructs the median image, then a separate post-hoc UQ module predicts the 5% and 95% bounds. Physics-based methods enforce measurement fidelity, but current UQ methods are post-hoc and not integrated with the reconstruction." >}}
{{< /project-figure >}}

Machine-learning and other computational methods reconstruct raw frequency magnetic resonance (MR) measurements into images. Introducing these powerful priors risks introducing <b>hallucinations</b>, plausible nonexistent structures. Uncertainty quantification (UQ) methods provide statistical bounds on reconstruction uncertainty.

Deep-learning-only methods, like <i>im2im</i>, do not include a data-fidelity term that ensures the reconstruction is consistent with the measurement, and are thus <b>not physics-based</b>.

Physics-based methods include a data-consistency term and use neural networks as regularizers. However, prior work, like _Pixelwise UQ_, uses a <b>post-hoc UQ method</b> that is not integrated with the reconstruction.

We ask: <b>Can we apply an integrated approach to uncertainty-quantification for physics-based architectures?</b> That is, can we have UQ informed by intermediates in the reconstruction process rather than only the final image reconstruction?
{{% /project-section %}}

{{% project-section title="Method" %}}
{{< project-figure src="quantile.png" alt="Quantile loss. Prior work reconstructs only fixed quantiles using the quantile loss L_q(x, x̂), which equals q times |x − x̂| when x − x̂ ≥ 0 and (1 − q) times |x − x̂| otherwise. Instead, we use the quantile loss to condition the reconstruction on any quantile." >}}
{{< /project-figure >}}
**Primer on quantile loss**: Prior work uses quantile loss as a way to generate quantile-conditional reconstructions, but only for a fixed number of quantiles. We instead use quantile loss to provide reconstructions conditioned on any quantile.

{{< project-figure src="method.png" alt="Diagram of qVarNet with quantile conditioning. Undersampled k-space passes through a chain of cascades, each a neural-network regularizer with a data-consistency (DC) step, alongside a sensitivity map estimator. A quantile sampled from a distribution modulates every layer of the regularizers. The network outputs upper-bound, median and lower-bound knee reconstructions, which are compared with the ground truth through the quantile loss and back-propagated during training." >}}
**Method Overview**: We pass in quantiles as input to the reconstruction, alongside the raw k-space. We add **FiLM layers** within the regularizer blocks of the E2E-VarNet to modulate the layers of the neural network. This conditions the network per passed-in quantile.

Because adding this quantile-conditioning was expensive during training, we had an alternate recurrent-state implementation that's detailed in the poster.
{{< /project-figure >}}
{{< project-figure src="conformal.png" alt="Conformal calibration example. A horizontal line across a 95% uncertainty map of a knee is plotted as a line intensity profile, showing pixel intensity by column for the reconstruction, the upper and lower bounds, and ground-truth points marked as covered or missed. A magnified region, columns 120 to 150, has an actual coverage of 93% before calibration, with two ground-truth points outside the bounds. After calibrating coverage on a held-out dataset, the bounds widen and one of the two missed points, marked with a green plus, is now covered." >}}
**Interval calibration after training**: To provide **statistically guaranteed** bounds on ground-truth coverage, we apply **conformal calibration.** In the figure, there's a horizontal black line on the uncertainty map and its corresponding line-intensity profile. The model outputs heuristic bounds that should provide 95\% coverage, but the actual coverage before calibration could be lower than this (in the region highlighted in the middle figure, it's only 93\% coverage, with two ground-truth points not covered by the bounds indicated by red x marks).

We use a held-out dataset to stretch the upper- and lower- bounds to provide the desired coverage (last figure now shows the bounds have scaled to cover one of the missed points, denoted by a green plus sign).
{{< /project-figure >}}
{{% /project-section %}}

{{% project-section title="Results" %}}
Visual results are shown below; note that our method's uncertainty map matches up the most with the error map compared to _im2im_ and _Pixelwise UQ_.

{{< project-figure src="visual.png" alt="Visual results on a magnified region of a knee MRI. The ground-truth image and the magnified region are at the top. Below is a grid with columns im2im, Ours and Pixelwise UQ, and rows for the reconstruction, the error map and the uncertainty map, on a shared color scale from 0 to 0.14. Our uncertainty is highest along the same two bands where our error is highest. im2im's uncertainty misses its high-error strip at the right edge, and Pixelwise UQ's uncertainty stays mostly low." >}}

{{< /project-figure >}}
{{< project-figure src="quant.png" alt="Bar charts of quantitative results at 4x, 6x, 8x, 16x and 24x acceleration, comparing Ours, Pixelwise UQ and im2im (im2im on single-coil knee only). Rows are single-coil knee and multi-coil brain. Columns are mean uncertainty interval length, reconstruction PSNR, and mean per-slice Pearson and Spearman correlation between the uncertainty and error maps. As acceleration increases, intervals lengthen and PSNR and correlations drop. On single-coil knee, the physics-based methods have slightly higher PSNR than im2im, and ours has the highest Pearson correlation at 8x and above. On multi-coil brain, ours and Pixelwise UQ have nearly identical PSNR, while Pixelwise UQ has shorter intervals and higher correlations." >}}
Quantitative results are shown above: We see that physics-based reconstruction methods out-perform deep-learning ones and that our method has a higher uncertainty and error-map correlation at higher accelerations with single-coil reconstruction. Surprisingly, overall integrated UQ performs comparably to post-hoc approaches.
{{< /project-figure >}}
{{% /project-section %}}

{{% project-section title="Future work and acknowledgements" %}}
**Future exploration**: With the quantile-conditioning we've added to the regularizer, we wonder how that optimization interacts with fixed data-consistency constraints. And we will also explore integrated vs post-hoc UQ in a limited-data regime. 

**Acknowledgements**: We gratefully acknowledge use of the research computing resources of the Empire AI Consortium, Inc, with support from Empire State Development of the State of New York, the Simons Foundation, and the Secunda Family Foundation. This work was supported by computing resources from an Amazon Research Award. 
{{% /project-section %}}
